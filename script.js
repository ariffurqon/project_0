$(function() {

  // form to create new message
  var $newMessage = $('#new-message');

  // element to hold our list of messages
  var $messageList = $('#message-list');

  // todo template
  var messageTemplate = _.template($('#message-template').html());

  // `messages` array is our model (holds our data)
  // contains test (or "seed") data
  var messages = [
    {message: "Intelligentsia Blue Bottle retro Shoreditch, Portland locavore disrupt. PBR before they sold out wayfarers pour-over shabby chic, tofu four loko art party."},
    {message: "IPhone small batch shabby chic street art mustache, photo booth XOXO, lit·er·al·ly."},
    {message: "Disco nap Chia you probably haven't heard of them fap, yr tilde chillwave cliche Etsy beard."}
  ];

  // append existing todos (from seed data) to `$messageList`
  _.each(messages, function (feeds, index) {
    var $post = $(messageTemplate(feeds));
    $post.attr('data-index', index);
    $messageList.append($post);
  });

  // submit form to create new message
  $newMessage.on('submit', function(event) {
    event.preventDefault();

    // create new message object from form data
    var messageTitle = $('#message-title').val();
    var messageData = {message: messageTitle};

    // store our new message
    messages.push(messageData);
    console.log(messages);
    var index = messages.indexOf(messageData);

    // append our new message to the page
    var $blog = $(messageTemplate(messageData));
    $blog.attr('data-index', index);
    $messageList.append($blog);

    // reset the form
    $newMessage[0].reset();
    $('#message-title').focus();
  });

  // remove feeds from model and view
  $messageList.on("click", ".delete", function () {
    var $feed = $(this).closest(".feeds");
    var index = $feed.attr('data-index');

    // remove message from the `messages` array (model)
    messages.splice(index, 1);
    console.log(messages);

    // remove message from the DOM (view)
    $feed.remove();

    // reset indexes in DOM to match `messages` array
    // $.each loops through DOM elements
    $('.feeds').each(function(index) {
      $(this).attr('data-index', index);
    });
  });


});
