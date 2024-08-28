import axios from 'axios';

export async function getPlaces(req, res) {
  const { destinationCountry, budget, travelStyle, interestsNew, accommodationType, transportationType, activityType, cuisineType, tripDuration, language } = req.body;

 const prompt = `
Generate a personalized travel itinerary for a trip to ${destinationCountry} with a budget of ${budget}. 
The traveler is interested in a ${travelStyle} vacation and enjoys ${interestsNew}. 
They are looking for ${accommodationType} accommodations and prefer ${transportationType} transportation. 
The itinerary should include ${activityType} activities and ${cuisineType} dining options. 
Please provide a detailed itinerary with daily recommendations for ${tripDuration} days, including suggested destinations, activities, and dining options.

The response should be in the following fixed JSON format:
{
  "destinationCountry": "${destinationCountry}",
  "budget": "${budget}",
  "tripDuration": "${tripDuration}",
  "travelStyle": "${travelStyle}",
  "interests": "${interestsNew}",
  "accommodationType": "${accommodationType}",
  "transportationType": "${transportationType}",
  "itinerary": [
    // Ensure to include each day until ${tripDuration} days in the itinerary array.
    // Each day should have a unique "day" and "date".
    // Example for one day:
    {
      "day": 1,
      "date": "YYYY-MM-DD",
      "activities": [
        {
          "time": "HH:MM AM/PM",
          "activity": "Description of the activity",
          "location": "Location name or address",
          "cost": "Estimated cost of the activity"
        }
      ],
      "meals": [
        {
          "mealType": "Breakfast/Lunch/Dinner",
          "restaurant": "Name of the restaurant",
          "cuisine": "${cuisineType}",
          "location": "Location name or address",
          "cost": "Estimated cost of the meal"
        }
      ],
      "accommodation": {
        "name": "Name of the accommodation",
        "type": "${accommodationType}",
        "location": "Location name or address",
        "costPerNight": "Cost per night"
      }
    },
    // Include each day until ${tripDuration} days in the itinerary array.
  ],
  "language": "${language}"
}
// Make sure the response adheres to this JSON structure exactly, with entries for each day of the trip.
`;

  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        messages: [{ role: 'user', content: prompt }],
        model: 'llama3-70b-8192'
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error generating itinerary', error });
  }
}

/*
{ 
  "destinationCountry": "Japan", 
  "budget": "5000", 
  "travelStyle": "relaxing", 
  "interestsNew": "nature", 
  "accommodationType": "hotel", 
  "transportationType": "public transportation", 
  "activityType": "outdoor", 
  "cuisineType": "local", 
  "tripDuration": "5", 
  "language": "English"
}

*/