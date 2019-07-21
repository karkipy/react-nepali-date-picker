# react-nepali-date-picker

## Introduction

React Nepali Date Picker is a widget for react , this is a typical calendar picker , but provides the option to switch calendar type from B.S to A.D.




## Installation

```javascript
npm i react-nepali-date-picker
```

## Parameters

Calendar can be used to act as an input component as well. All the parameters are optional
1) value : send the date from which to show calendar with else default is the current date
2) onSelect : returns the value that has been selected or the date that user has clicked on


## Demo

commands to run demo app

```javascript
  yarn
  cd app
  yarn start
```

## Styling

Add this to your application css to change calendar styling

1. .calendar-container: the main container of the calendar that wraps everything, add background color to the calendar

2. .calendar-header: the bar that contains the BS to Ad, month and year switcher

3. .week-header: the bar that contains the days of a week such as sun, mon , tue

4. .day-title: this element contains the individual component of week header, this wraps individual
sun, mon, etc.

5. .week: this is the container for individual week

6. .day: this is the container for actual date of a day in the calendar such as 1,2,3, 4, ....

7. active: css for the date that was actually selected

8. .disabled: css for date that are not of this month

## Usage

```javascript

import React, { useState } from 'react';
import Calendar from 'react-nepali-date-picker';


function App() {
  const [value, setValue] = useState(new Date());
  return (
    <Calendar value={value} onSelect={setValue} />
  )
}

```


