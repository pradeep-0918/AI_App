"""
Main application entry point for the Dynamic AI-Driven Bus Scheduling System.
"""

from data_ingestion.passenger_data import PassengerDataIngestor
from data_ingestion.traffic_data import TrafficDataIngestor
from data_ingestion.weather_events import WeatherEventsIngestor
from data_ingestion.emission_data import EmissionDataIngestor

from models.passenger_demand import PassengerDemandModel
from models.traffic_analysis import TrafficPatternAnalyzer
from optimization.scheduler import Scheduler

def main():
    # Initialize data ingestors
    passenger_ingestor = PassengerDataIngestor()
    traffic_ingestor = TrafficDataIngestor()
    weather_ingestor = WeatherEventsIngestor()
    emission_ingestor = EmissionDataIngestor()

    # Load data (mock or real)
    passenger_data = passenger_ingestor.load_data()
    traffic_data = traffic_ingestor.load_data()
    weather_data = weather_ingestor.load_data()
    emission_data = emission_ingestor.load_data()

    # Predict passenger demand
    demand_model = PassengerDemandModel()
    passenger_demand = demand_model.predict(passenger_data, weather_data)

    # Analyze traffic patterns
    traffic_analyzer = TrafficPatternAnalyzer()
    traffic_conditions = traffic_analyzer.analyze(traffic_data)

    # Initialize scheduler with data
    scheduler = Scheduler(passenger_demand, traffic_conditions, emission_data)

    # Optimize schedule
    optimized_schedule = scheduler.optimize()

    # Output optimized schedule
    print("Optimized Bus Schedule:")
    for route, schedule in optimized_schedule.items():
        print(f"Route: {route}")
        for time_slot, bus_allocation in schedule.items():
            print(f"  Time: {time_slot}, Buses Allocated: {bus_allocation}")

if __name__ == "__main__":
    main()
