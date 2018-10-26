# react-nepali-date-picker

### Introduction

React Nepali Date Picker is a widget for react , this is a typical calendar picker , but provides the option to switch calendar type from B.S to A.D.

### installation

```javascript
npm i react-nepali-date-picker
```

###parameters

Calendar can be used to act as an input component as well. All the parameters are optional

1) theme : type of theme i.e. dark or light default is dark
2) value : send the date from which to show calendar with else default is the current date
3) onSelect : returns the value that has been selected or the date that user has clicked on
4) onChange : returns the value user has selected and when the ok button is clicked
5) onCancel : returns previous value which user had previously selected

onChange and onCancel are required to display the OK and cancel button

### usage

```javascript

import Calendar from 'react-nepali-date-picker';

  <Calendar />
```

will result in

![screen shot 2018-10-24 at 2 08 09 pm](https://user-images.githubusercontent.com/12614476/47416846-4a838680-d796-11e8-968d-78259c7a4bee.png)


using as an input component pass onChange and onCancel


```javascript
import Calendar from 'react-nepali-date-picker';

  <Calendar
    onSelect={(s) => console.log(s)}
    onChange={(s) => console.log(s)}
    onCancel={(d) => console.log(d)}

  />
```

and will result in


![screen shot 2018-10-24 at 1 57 40 pm](https://user-images.githubusercontent.com/12614476/47416940-861e5080-d796-11e8-93b0-a22293cbd366.png)


using theme
```javascript
import Calendar from 'react-nepali-date-picker';

  <Calendar
    onSelect={(s) => console.log(s)}
    onChange={(s) => console.log(s)}
    onCancel={(d) => console.log(d)}
    theme="light"
  />
```


resulting in


![screen shot 2018-10-24 at 1 57 07 pm](https://user-images.githubusercontent.com/12614476/47416976-a0f0c500-d796-11e8-9c9a-823e9dd8e08a.png)




