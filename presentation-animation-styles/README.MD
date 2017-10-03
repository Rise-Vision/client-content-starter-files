ADDING RISE ANIMATIONS TO TEMPALTES

1. Link to the css animation library in your html.
       <link rel="stylesheet" href="https://storage.googleapis.com/risemedialibrary-7fa5ee92-7deb-450b-a8d5-e5ed648c575f/Template%20Library/rise-animation-styles.css">

(Note: there are also helper classes in this file to add drop shadow, corner radius, and delays)

2. In the css file the animations are organized in 2 different sections denoted by comments, "INTRO ANIMATIONS" and "REPEATING ANIMATIONS".

  A. INTRO Animations are ideal for combining with delays for a sequenced effect. This is because they start out transparent. To add, locate your placeholder and attach the desired animation / delay class.

  Example:
  <div  id="placeholder1" class ="bounceInDown delay1sec" placeholder="true"  style="..."></div>
  <div  id="placeholder1" class ="bounceInDown delay2sec" placeholder="true" style="..."></div>


  B. REPEATING - to add a repeating animation add a setInterval function in a script tag after your placeholders and toggle the desired animation class on your placeholder.
  example:
  <script>
          setInterval(function(){
            $('#placeholder1').toggleClass('shake');
            $('#placeholder2').toggleClass('shake');
      },5000);
        </script>

  (Note: you can utilize delays and intro animations in a repeating animation. Repeating animations just aren't ideal for intro as they don't start out transparent )


