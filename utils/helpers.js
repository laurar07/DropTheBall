// utils/helpers.js

import React from 'react'
import {
    AsyncStorage
} from 'react-native'
import {
    Notifications,
    Permissions
} from 'expo'

const NOTIFICATION_KEY = 'DropTheBall:notifications'

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function createNotification() {
    return {
        title: 'Drop The Ball',
        body: '',
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({
                        status
                    }) => {
                        if (status === 'granted') {
                            // Schedule some notification here
                        }
                    })
            }
        })
}