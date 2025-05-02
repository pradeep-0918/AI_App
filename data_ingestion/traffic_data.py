import random
from datetime import datetime, timedelta

class TrafficDataIngestor:
    def __init__(self):
        pass

    def load_data(self):
        """
        Generate synthetic traffic data for 10 routes and 10 time slots.
        """
        congestion_levels = ["low", "medium", "high"]
        data = {}
        base_time = datetime.strptime("08:00", "%H:%M")
        for i in range(1, 11):
            route_id = f"route_{i}"
            data[route_id] = {}
            for j in range(10):
                time_slot = (base_time + timedelta(minutes=30*j)).strftime("%H:%M")
                congestion = random.choice(congestion_levels)
                data[route_id][time_slot] = congestion
        return data
