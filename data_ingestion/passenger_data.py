class PassengerDataIngestor:
    def __init__(self):
        pass

    def load_data(self):
        """
        Load historical passenger data.
        For now, returns mock data.
        """
        # Mock data: {stop_id: {time_slot: passenger_count}}
        data = {
            "stop_1": {"08:00": 50, "09:00": 70, "10:00": 30},
            "stop_2": {"08:00": 40, "09:00": 60, "10:00": 20},
            "stop_3": {"08:00": 30, "09:00": 50, "10:00": 25},
        }
        return data
