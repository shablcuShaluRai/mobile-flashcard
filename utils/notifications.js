import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'mobile-flashcards:Notifications'

export function clearLocalNotification(){
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
  .then (Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification(){
  return {
    title: "Today Study Quiz Schedule",
    body: "Don't forget to study quiz today ",
    ios:{
      sound:true,
    },
    android: {
      sound:true,
      priority: 'high',
      sticky: false,
      vibrate:true,
    }
  }
}

export function setLocalNotification(){
  AsyncStorage.getItem(NOTIFICATION_KEY)
  .then(JSON.parse)
  .then((data) => {
    if(data == null){
      Permissions.askAsync(Permissions.NOTIFICATIONS)
      .then(({ status}) => {
        if(status === 'granted'){
          Notifications.cancelAllScheduledNotificationsAsync()

          let tommorrow = new Date()
          tommorrow.setDate(tommorrow.getDate()+1)
          tommorrow.setHours(20)
          tommorrow.setMinutes(0)


          Notifications.scheduleLocalNotificationAsync(
            createNotification(),
            {
              time:tommorrow,
              repeat:'day'
            }
          )
          AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))

        }
      })
    }
  })
}
