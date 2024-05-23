function addEventToCalendar() {
  var eventDetails = {
    title: 'Feira de Tecnologia & Inovação FMM',
    location: 'https://goo.gl/maps/Sc2cyrUsgTS7rjax5',
    startDate: '2023-06-30T10:00:00-04:00',
    endDate: '2023-06-30T18:00:00-04:00',
    description: 'Feira de Inovação e Tecnologia da Fundação Matias Machline.'
  };

  var startDate = new Date(eventDetails.startDate);
  var endDate = new Date(eventDetails.endDate);

  var calendarUrl = 'https://www.google.com/calendar/event?' +
    'action=TEMPLATE' +
    '&text=' + encodeURIComponent(eventDetails.title) +
    '&location=' + encodeURIComponent(eventDetails.location) +
    '&dates=' + encodeURIComponent(startDate.toISOString().replace(/-|:|\.\d+/g, "")) + '/' + encodeURIComponent(endDate.toISOString().replace(/-|:|\.\d+/g, "")) +
    '&details=' + encodeURIComponent(eventDetails.description);

  window.open(calendarUrl, '_blank');
}
