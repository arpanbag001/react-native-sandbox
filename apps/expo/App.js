import SandboxReactNativeView from '@callstack/react-native-sandbox'
import React, {useState} from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

// CounterApp and CalculatorApp components are loaded dynamically
// by the SandboxReactNativeView component, so they don't need to be
// defined in this file. They are implemented in separate sandbox bundles.

export default function App() {
  const [activeSandbox, setActiveSandbox] = useState('counter')

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f0f0" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Expo Sandbox Demo</Text>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tab,
              activeSandbox === 'counter' && styles.activeTab,
            ]}
            onPress={() => setActiveSandbox('counter')}>
            <Text
              style={[
                styles.tabText,
                activeSandbox === 'counter' && styles.activeTabText,
              ]}>
              Counter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              activeSandbox === 'calculator' && styles.activeTab,
            ]}
            onPress={() => setActiveSandbox('calculator')}>
            <Text
              style={[
                styles.tabText,
                activeSandbox === 'calculator' && styles.activeTabText,
              ]}>
              Calculator
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        {activeSandbox === 'counter' ? (
          <SandboxReactNativeView
            componentName="CounterApp"
            origin="counter-sandbox"
            allowedTurboModules={[
              'AppState',
              'DeviceInfo',
              'PlatformConstants',
            ]}
            onMessage={console.log}
            onError={console.error}
            style={styles.sandbox}
          />
        ) : (
          <SandboxReactNativeView
            componentName="CalculatorApp"
            origin="calculator-sandbox"
            allowedTurboModules={[
              'AppState',
              'DeviceInfo',
              'PlatformConstants',
            ]}
            onMessage={console.log}
            onError={console.error}
            style={styles.sandbox}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
  activeTabText: {
    color: '#007AFF',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sandbox: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  // Counter App Styles
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  count: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#007AFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  messageContainer: {
    width: '100%',
  },
  messageButton: {
    backgroundColor: '#34C759',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'center',
  },
  messageButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  // Calculator Styles
  display: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 20,
    paddingHorizontal: 20,
    color: '#333',
  },
  calculatorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  calcButton: {
    width: 70,
    height: 70,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 35,
  },
  calcButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  clearButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
})
