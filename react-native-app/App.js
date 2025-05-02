import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';

const mockPassengerData = {
  "stop_1": {"08:00": 50, "09:00": 70, "10:00": 30},
  "stop_2": {"08:00": 40, "09:00": 60, "10:00": 20},
  "stop_3": {"08:00": 30, "09:00": 50, "10:00": 25},
};

const mockTrafficData = {
  "route_1": {"08:00": "high", "09:00": "medium", "10:00": "low"},
  "route_2": {"08:00": "medium", "09:00": "high", "10:00": "medium"},
  "route_3": {"08:00": "low", "09:00": "low", "10:00": "low"},
};

const mockEmissionData = {
  "diesel_bus": 1.2,
  "electric_bus": 0.1,
  "hybrid_bus": 0.6,
};

function predictPassengerDemand(passengerData) {
  // Simple prediction logic (mock)
  return passengerData;
}

function analyzeTraffic(trafficData) {
  // Simple traffic analysis (mock)
  return trafficData;
}

function optimizeSchedule(passengerDemand, trafficConditions) {
  // Simple optimization logic (mock)
  return {
    "route_1": {"08:00": 5, "09:00": 4, "10:00": 3},
    "route_2": {"08:00": 4, "09:00": 5, "10:00": 4},
    "route_3": {"08:00": 3, "09:00": 3, "10:00": 3},
  };
}

export default function App() {
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    const demand = predictPassengerDemand(mockPassengerData);
    const traffic = analyzeTraffic(mockTrafficData);
    const optimized = optimizeSchedule(demand, traffic);
    setSchedule(optimized);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Optimized Bus Schedule</Text>
        {Object.entries(schedule).map(([route, times]) => (
          <View key={route} style={styles.routeContainer}>
            <Text style={styles.routeTitle}>Route: {route}</Text>
            {Object.entries(times).map(([time, buses]) => (
              <Text key={time} style={styles.scheduleText}>
                Time: {time}, Buses Allocated: {buses}
              </Text>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f0f4f7' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  routeContainer: { marginBottom: 15, backgroundColor: '#fff', padding: 15, borderRadius: 8 },
  routeTitle: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  scheduleText: { fontSize: 16, marginBottom: 5 },
});
