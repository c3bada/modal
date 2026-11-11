import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const close = () => setModalVisible(false);

  return (
    <View style={styles.container}>
      <Modal
      animationType='fade'
      transparent={true}
      visible={modalVisible}
      onRequestClose={close}>
        <View style={styles.modalBackground}>
        <View style={styles.modalView}>
          <Text>This is modal...</Text>
          <Pressable onPress={close}>
            <Text style={styles.closeText}>Close</Text>
          </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        onPress={() => setModalVisible(true)}
        style={({pressed}) => ({opacity: pressed ? 0.5 : 1})}>
          <Text>Show modal message</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    backgroundColor:'green',
    padding:50,
    alignItems:'center',
    elevation:5,
  },
  closeText:{
    fontWeight:'bold',
    marginTop:16,
  },

});