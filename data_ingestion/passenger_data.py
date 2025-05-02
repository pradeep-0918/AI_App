import random
from datetime import datetime, timedelta

class PassengerDataIngestor:
    def __init__(self):
        pass

    def load_data(self):
        """
        Generate synthetic passenger data for 100 stops and 10 time slots.
        """
        data = {}
        base_time = datetime.strptime("08:00", "%H:%M")
        for i in range(1, 101):
            stop_id = f"stop_{i}"
            data[stop_id] = {}
            for j in range(10):
                time_slot = (base_time + timedelta(minutes=30*j)).strftime("%H:%M")
                passenger_count = random.randint(10, 100)
                data[stop_id][time_slot] = passenger_count
        return data
