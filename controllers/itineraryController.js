import { post } from 'axios';

export async function getPlaces(req, res) {
  const { destinationCountry, budget, travelStyle, interestsNew, accommodationType, transportationType, activityType, cuisineType, tripDuration, language } = req.body;

  const prompt = `Generate a personalized travel itinerary for a trip to ${destinationCountry} with a budget of ${budget}. The traveler is interested in a ${travelStyle} vacation and enjoys ${interestsNew}. They are looking for ${accommodationType} accommodations and prefer ${transportationType} transportation. The itinerary should include ${activityType} activities and ${cuisineType} dining options. Please provide a detailed itinerary with daily recommendations for ${tripDuration} days, including suggested destinations, activities, and dining options. The itinerary should be written in ${language}.`;

  try {
    const response = await post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        messages: [{ role: 'user', content: prompt }],
        model: 'llama3-8b-8192'
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
