class WeatherEventsIngestor:
    def __init__(self):
        pass

    def load_data(self):
        """
        Load weather and event data.
        For now, returns mock data.
        """
        # Mock data: {date: weather_condition, events: [event_list]}
        data = {
            "2024-04-01": {"weather": "sunny", "events": ["concert"]},
            "2024-04-02": {"weather": "rainy", "events": []},
            "2024-04-03": {"weather": "cloudy", "events": ["sports_game"]},
        }
        return data
