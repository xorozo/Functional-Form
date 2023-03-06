var countries = [
    {
        checked: false,
        name: "Afgahanistan"
    },
    {
        checked: false,
        name: "Algeria"
    },
    {
        checked: false,
        name: "Angola"
    },
    {
        checked: false,
        name: "Andorra"
    },
    {
        checked: false,
        name: "Argentina"
    },
    {
        checked: false,
        name: "United States"
    },
    {
        checked: false,
        name: "United Kingdom"
    },
    {
        checked: false,
        name: "Romaina"
    },
    {
        checked: false,
        name: "Russia"
    }
]

$(document).ready(function() {
    $('.search-result').empty();
    for(var i = 0; i < countries.length; i++) {
        $('.search-result').append(
            `<div class="result-item unchecked">
                <input type="checkbox" value="${countries[i].checked}" />
                <label>${countries[i].name}</label>
            </div>`
        );
    }
})

$(document).on('click', '.btn-clear-all', function() {
    $('.search-result').empty();
    $('#searchInput').val('');
})

$(document).on('change', '.result-item input[type="checkbox"]', function(){
    if(this.checked) {
        $(this).parent('.result-item').removeClass('unchecked');
        $(this).parent('.result-item').addClass('checked');
    } else {
        $(this).parent('.result-item').removeClass('checked');
        $(this).parent('.result-item').addClass('unchecked');
    }
})

$(document).on('change', '.show-option input[type="checkbox"]', function(){
    if(this.checked) {
        $('.result-item.unchecked').hide();
    } else {
        $('.result-item.unchecked').show();
    }
})

$(document).on('keyup', '#searchInput', function() {
    var keyward = this.value.toLowerCase();
    var sCouns = countries.filter((item) => item.name.toLowerCase().includes(keyward));
    console.log('hi===', keyward, sCouns);
    $('.search-result').empty();
    for(var i = 0; i < sCouns.length; i++) {
        $('.search-result').append(
            `<div class="result-item unchecked">
                <input type="checkbox" value="${sCouns[i].checked}" />
                <label>${sCouns[i].name}</label>
            </div>`
        );
    }
})