import React from 'react';
import { View, Button } from 'react-native';
import { SMS, MailComposer, PhoneNumber } from 'expo';
import { Communications } from 'react-native-communications';

export default function CommunicationScreen() {
  const sendSMS = async () => {
    try {
      await SMS.sendSMSAsync(PhoneNumber.getNumberAsync());
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };

  const sendEmail = async () => {
    try {
      await MailComposer.composeAsync({
        recipients: ['email@example.com'],
        subject: 'Subject',
        body: 'Body'
      });
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const makeCall = () => {
    Communications.phonecall('0123456789', true);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Send SMS" onPress={sendSMS} />
      <Button title="Send Email" onPress={sendEmail} />
      <Button title="Make Call" onPress={makeCall} />
    </View>
  );
}