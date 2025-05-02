class PassengerDemandModel:
    def __init__(self):
        pass

    def predict(self, passenger_data, weather_data):
        """
        Predict passenger demand based on historical passenger data and weather/events.
        For now, returns a simple aggregation with weather impact.
        """
        demand = {}
        for stop, times in passenger_data.items():
            demand[stop] = {}
            for time_slot, count in times.items():
                # Simple weather impact factor
                weather_factor = 1.0
                for date, info in weather_data.items():
                    if info["weather"] == "rainy":
                        weather_factor = 1.2  # Increase demand by 20% on rainy days
                demand[stop][time_slot] = int(count * weather_factor)
        return demand
