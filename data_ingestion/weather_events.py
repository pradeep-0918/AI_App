import random
from datetime import datetime, timedelta

class WeatherEventsIngestor:
    def __init__(self):
        pass

    def load_data(self):
        """
        Generate synthetic weather and event data for 100 days.
        """
        weather_conditions = ["sunny", "rainy", "cloudy"]
        event_types = ["concert", "sports_game", "festival", "none"]
        data = {}
        base_date = datetime.strptime("2020-01-01", "%Y-%m-%d")
        for i in range(1000):
            date = (base_date + timedelta(days=i)).strftime("%Y-%m-%d")
            weather = random.choice(weather_conditions)
            event = random.choice(event_types)
            events = [] if event == "none" else [event]
            data[date] = {"weather": weather, "events": events}
        return data
