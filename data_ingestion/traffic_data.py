class TrafficDataIngestor:
    def __init__(self):
        pass

    def load_data(self):
        """
        Load traffic data.
        For now, returns mock data.
        """
        # Mock data: {route_id: {time_slot: congestion_level}}
        data = {
            "route_1": {"08:00": "high", "09:00": "medium", "10:00": "low"},
            "route_2": {"08:00": "medium", "09:00": "high", "10:00": "medium"},
            "route_3": {"08:00": "low", "09:00": "low", "10:00": "low"},
        }
        return data
