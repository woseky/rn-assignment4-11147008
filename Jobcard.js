import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const JobCard = ({ title, company, location, salary, type, image }) => {
  return (
    <View style={[styles.card, type === 'featured' && styles.featuredCard]}>
      <Image source={image} style={styles.companyLogo} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.company}>{company}</Text>
      <Text style={styles.salary}>{salary}</Text>
      <Text style={styles.location}>{location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  featuredCard: {
    backgroundColor: '#E0ECFF',
    marginRight: 15,
    width: 250,
  },
  companyLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  company: {
    fontSize: 14,
    color: '#666',
  },
  salary: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  location: {
    fontSize: 12,
    color: '#666',
  },
});

export default JobCard;
