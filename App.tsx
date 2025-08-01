import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <LinearGradient
            colors={['#667eea', '#764ba2']}
            style={styles.header}
          >
            <View style={styles.headerContent}>
              <Text style={styles.headerTitle}>مرحباً بك</Text>
              <Text style={styles.headerSubtitle}>تطبيق الموبايل الخاص بك</Text>
            </View>
          </LinearGradient>

          {/* Navigation Cards */}
          <View style={styles.cardsContainer}>
            <TouchableOpacity style={styles.card}>
              <LinearGradient
                colors={['#ff9a9e', '#fecfef']}
                style={styles.cardGradient}
              >
                <Ionicons name="home-outline" size={32} color="#fff" />
                <Text style={styles.cardTitle}>الرئيسية</Text>
                <Text style={styles.cardDescription}>الصفحة الرئيسية للتطبيق</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <LinearGradient
                colors={['#a8edea', '#fed6e3']}
                style={styles.cardGradient}
              >
                <Ionicons name="person-outline" size={32} color="#fff" />
                <Text style={styles.cardTitle}>الملف الشخصي</Text>
                <Text style={styles.cardDescription}>إدارة حسابك الشخصي</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <LinearGradient
                colors={['#ffecd2', '#fcb69f']}
                style={styles.cardGradient}
              >
                <Ionicons name="settings-outline" size={32} color="#fff" />
                <Text style={styles.cardTitle}>الإعدادات</Text>
                <Text style={styles.cardDescription}>تخصيص التطبيق</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <LinearGradient
                colors={['#d299c2', '#fef9d7']}
                style={styles.cardGradient}
              >
                <Ionicons name="help-circle-outline" size={32} color="#fff" />
                <Text style={styles.cardTitle}>المساعدة</Text>
                <Text style={styles.cardDescription}>الدعم والمساعدة</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Features Section */}
          <View style={styles.featuresSection}>
            <Text style={styles.sectionTitle}>المميزات</Text>
            
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
              <Text style={styles.featureText}>واجهة مستخدم حديثة وسهلة الاستخدام</Text>
            </View>
            
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
              <Text style={styles.featureText}>يعمل على الآيفون والأندرويد</Text>
            </View>
            
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
              <Text style={styles.featureText}>تصميم متجاوب مع جميع أحجام الشاشات</Text>
            </View>
            
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
              <Text style={styles.featureText}>أداء سريع ومستقر</Text>
            </View>
          </View>

          {/* Action Button */}
          <TouchableOpacity style={styles.actionButton}>
            <LinearGradient
              colors={['#667eea', '#764ba2']}
              style={styles.actionButtonGradient}
            >
              <Text style={styles.actionButtonText}>ابدأ الآن</Text>
              <Ionicons name="arrow-forward" size={20} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
    textAlign: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 20,
  },
  card: {
    width: (width - 50) / 2,
    marginBottom: 15,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardGradient: {
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    minHeight: 120,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.9,
    marginTop: 5,
    textAlign: 'center',
  },
  featuresSection: {
    padding: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  featureText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 15,
    flex: 1,
    textAlign: 'right',
  },
  actionButton: {
    margin: 20,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  actionButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 25,
  },
  actionButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 10,
  },
});