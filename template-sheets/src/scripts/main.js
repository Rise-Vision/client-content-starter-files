

// Wait for 'WebComponentsReady'.
      window.addEventListener('WebComponentsReady', function(e) {
        var sheet = document.querySelector('rise-google-sheet');

        // Respond to events it fires.
        sheet.addEventListener('rise-google-sheet-response', function(e) {
          if (e.detail && e.detail.results) {

            displayResults(e.detail.results);
          }
        });

        function displayResults(results) {
          var results = results;
          results.shift();
          var people = results.map(function(person){

            return `<li class="person"
                  data-image="${person[0]}"
                  data-name="${person[1]}"
                  data-title="${person[2]}"
                  data-phone="${person[3]}"
                  data-email="${person[4]}">
                    <p class='column1'>
                      <img src=${person[0]}>
                    </p>
                    <p class='name column2'>
                      ${person[1]}
                    </p>
                    <p class='title column3'>
                      ${person[2]}
                    </p>
                    <p class='phone column4'>
                      ${person[3]}
                    </p>
                    <p class='email column5'>
                      ${person[4]}
                    </p>
                  </li>`;
      });

        $(".list").append(people);

        }

        sheet.go(); // Executes a request.
      });

