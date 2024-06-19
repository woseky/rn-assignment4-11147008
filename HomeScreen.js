import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import JobCard from '../components/Jobcard';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    { title: 'Software Engineer', company: 'Facebook', location: 'Accra, Ghana', salary: '$180,000', type: 'featured', image: require('../assets/facebook-logo.png') },
    { title: 'Data Scientist', company: 'Google', location: 'Accra, Ghana', salary: '$160,000', type: 'featured', image: require('../assets/google-logo.png') },
    { title: 'UI/UX Designer', company: 'Apple', location: 'San Francisco, US', salary: '$150,000', type: 'featured', image: require('../assets/apple-logo.png') },
    { title: 'Backend Developer', company: 'Amazon', location: 'Seattle, US', salary: '$175,000', type: 'featured', image: require('../assets/amazon-logo.png') },
    { title: 'Full Stack Developer', company: 'Microsoft', location: 'Redmond, US', salary: '$170,000', type: 'featured', image: require('../assets/microsoft-logo.png') },
    { title: 'Data Analyst', company: 'Netflix', location: 'Los Gatos, US', salary: '$165,000', type: 'featured', image: require('../assets/netflix-logo.png') },
    { title: 'DevOps Engineer', company: 'Spotify', location: 'Stockholm, Sweden', salary: '$160,000', type: 'featured', image: require('../assets/spotify-logo.png') },
    { title: 'Mobile Developer', company: 'Snapchat', location: 'Los Angeles, US', salary: '$155,000', type: 'featured', image: require('../assets/snapchat-logo.png') },
    { title: 'Machine Learning Engineer', company: 'Tesla', location: 'Palo Alto, US', salary: '$180,000', type: 'featured', image: require('../assets/tesla-logo.png') },
    { title: 'Blockchain Developer', company: 'IBM', location: 'New York, US', salary: '$170,000', type: 'featured', image: require('../assets/ibm-logo.png') },
  ];

  const popularJobs = [
    { title: 'Jr Executive', company: 'Burger King', location: 'Los Angeles, US', salary: '$96,000/y', type: 'popular', image: require('../assets/burger-king-logo.png') },
    { title: 'Product Manager', company: 'Beats', location: 'Florida, US', salary: '$84,000/y', type: 'popular', image: require('../assets/beats-logo.png') },
    { title: 'Product Manager', company: 'Facebook', location: 'Florida, US', salary: '$86,000/y', type: 'popular', image: require('../assets/facebook-logo.png') },
    { title: 'HR Manager', company: 'Spotify', location: 'Stockholm, Sweden', salary: '$90,000/y', type: 'popular', image: require('../assets/spotify-logo.png') },
    { title: 'Marketing Specialist', company: 'Apple', location: 'San Francisco, US', salary: '$80,000/y', type: 'popular', image: require('../assets/apple-logo.png') },
    { title: 'Financial Analyst', company: 'Netflix', location: 'Los Gatos, US', salary: '$92,000/y', type: 'popular', image: require('../assets/netflix-logo.png') },
    { title: 'Software Engineer', company: 'Amazon', location: 'Seattle, US', salary: '$120,000/y', type: 'popular', image: require('../assets/amazon-logo.png') },
    { title: 'Project Manager', company: 'Microsoft', location: 'Redmond, US', salary: '$110,000/y', type: 'popular', image: require('../assets/microsoft-logo.png') },
    { title: 'Sales Manager', company: 'IBM', location: 'New York, US', salary: '$95,000/y', type: 'popular', image: require('../assets/ibm-logo.png') },
    { title: 'Business Analyst', company: 'Tesla', location: 'Palo Alto, US', salary: '$100,000/y', type: 'popular', image: require('../assets/tesla-logo.png') },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Image
          source={require('../assets/profile.jpg')} // Replace with your local profile image
          style={styles.profileImage}
        />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a job or position"
        />
        <TouchableOpacity style={styles.filterButton}>
          <Image
            source={require('../assets/filter-icon.png')} // Replace with your filter icon image
            style={{ width: 24, height: 24 }} // Adjust dimensions as needed
          />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredJobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Jobs</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        {popularJobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  email: {
    fontSize: 16,
    color: '#888',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  filterButton: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  seeAll: {
    fontSize: 14,
    color: '#007bff',
  },
});

export default HomeScreen;
