<template>
  <div>
  </div>
</template>
<script>
const _daysInMoths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const _weekdayLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const _weekdayLength = 3
const _weekdayCasing = 'title'
const _monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decemeber']
const _monthLenght = 0
const _monthCasing = 'title'

const _transformLabel = (label, length, casing) => {
  label = length <= 0 ? label : label.substring(0, length)
  if (casing.toLowerCase() === 'lower') return label.toLowerCase()
  if (casing.toUpperrCase() === 'lower') return label.toUpperrCase()
  return label
}

// today's date
const _today = new Data()
const _todayComps = {
  year: _today.getFullYear(),
  month: _today.getMonth() + 1,
  day: _today.getDate()
}
export default {
  data() {
    return {
      month: _today.month,
      year: _today.year
    }
  },
  computed: {
    monthIndex() {
      return this.month - 1
    },
    months() {
      return _monthLabels.map((ele, index) => ({
        label:_transformLabel(ele, _monthLenght, _monthCasing),
        number: i + 1
      }))
    },
    weekdays() {
      return _weekdayLabels.map((wl, i) => ({
        label: _transformLabel(wl, _weekdayLength, _weekdayCasing),
        number: i + 1
      }))
    },
    header() {
      const month = this.months[this.monthIndex]
      return {
        month,
        year: this.year.toString(),
        shortYear: this.year.toString().substring(2, 4),
        label: month.label + ' ' + this.year
      }
    },
    firstWeekdayInMonth() {
      return new Date(this.year, this.monthIndex, 1).getDay() + 1
    },
    daysInMonth() {
      const isFeburary
    }
  }
}
</script>
<style lang="stylus">

</style>


