import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';

import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';

function generateSyntheticPassengerData() {
  const data = {};
  const baseHour = 8;
  for (let i = 1; i <= 100; i++) {
    const stopId = `stop_${i}`;
    data[stopId] = {};
    for (let j = 0; j < 10; j++) {
      const timeSlot = `${String(baseHour + Math.floor(j / 2)).padStart(2, '0')}:${j % 2 === 0 ? '00' : '30'}`;
      data[stopId][timeSlot] = Math.floor(Math.random() * 90) + 10;
    }
  }
  return data;
}

function generateSyntheticTrafficData() {
  const congestionLevels = ['low', 'medium', 'high'];
  const data = {};
  const baseHour = 8;
  for (let i = 1; i <= 10; i++) {
    const routeId = `route_${i}`;
    data[routeId] = {};
    for (let j = 0; j < 10; j++) {
      const timeSlot = `${String(baseHour + Math.floor(j / 2)).padStart(2, '0')}:${j % 2 === 0 ? '00' : '30'}`;
      data[routeId][timeSlot] = congestionLevels[Math.floor(Math.random() * congestionLevels.length)];
    }
  }
  return data;
}

const emissionData = {
  diesel_bus: 1.2,
  electric_bus: 0.1,
  hybrid_bus: 0.6,
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
  // For demonstration, allocate buses proportional to passenger demand
  const schedule = {};
  Object.keys(trafficConditions).forEach(route => {
    schedule[route] = {};
    Object.keys(trafficConditions[route]).forEach(timeSlot => {
      // Simple logic: more congestion means fewer buses allocated
      const congestion = trafficConditions[route][timeSlot];
      let congestionFactor = 1;
      if (congestion === 'high') congestionFactor = 0.7;
      else if (congestion === 'medium') congestionFactor = 0.85;
      else congestionFactor = 1;

      // Sum passenger demand for stops on this route (simplified)
      let totalDemand = 0;
      Object.values(passengerDemand).forEach(times => {
        if (times[timeSlot]) totalDemand += times[timeSlot];
      });

      const busesAllocated = Math.max(1, Math.round((totalDemand / 100) * congestionFactor));
      schedule[route][timeSlot] = busesAllocated;
    });
  });
  return schedule;
}

export default function App() {
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    const passengerData = generateSyntheticPassengerData();
    const trafficData = generateSyntheticTrafficData();
    const demand = predictPassengerDemand(passengerData);
    const traffic = analyzeTraffic(trafficData);
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
