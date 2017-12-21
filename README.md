##	Demo

[Git Page](https://github.com/MickeyMiao7/throttling-debouncing-demo.git)



## Intro

**Throttling:**  Limit the frequency of firing an event. 

In the demo, click the button, the log will be printed out, and then within 2 seconds further click will not work. 

During the 2s, the last event is recorded and will happen once the 2's hits. 

*This feature is useful in the situation such as window resizing*



**Debouncing:** When the user stops to interact with the asset for a while, the event will be fired. 

In the demo, click the button, if no more clicking within 3 seconds, the log will be printed out.



## Reference

The demo refers to the blog: [https://medium.com/@_jh3y/throttling-and-debouncing-in-javascript-b01cad5c8edf](https://medium.com/@_jh3y/throttling-and-debouncing-in-javascript-b01cad5c8edf)

All the copyright is reserved by the blog author.