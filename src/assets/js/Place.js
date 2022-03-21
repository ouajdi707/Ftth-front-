$('.country_selector').selectize({
  render: {
    option: function(data, escape) {
      return '<div class="option"><span class="flag-icon flag-icon-' + String(escape(data.value)).toLowerCase() + '"></span>' + escape(data.text) + '</div>';
    },
    item: function(data, escape) {
      return '<div class="item"><span class="flag-icon flag-icon-' + String(escape(data.value)).toLowerCase() + '"></span>' + escape(data.text) + '</div>';
    }
  },
});
