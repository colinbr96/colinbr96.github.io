function applyTemplate() {
    $.getJSON('json/smooth_gray.json', function(data) {
        $.get('template.html', function(template) {
            var html = Mustache.to_html(template, data);
            $('#contents').html(html);
        });
    });
};