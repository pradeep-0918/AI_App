class EmissionDataIngestor:
    def __init__(self):
        pass

    def load_data(self):
        """
        Load emission data per vehicle type.
        For now, returns mock data.
        """
        # Mock data: {vehicle_type: emission_per_km}
        data = {
            "diesel_bus": 1.2,  # kg CO2 per km
            "electric_bus": 0.1,
            "hybrid_bus": 0.6,
        }
        return data
