
Tech Used -> React ,Redux , Redux-thunk , Bootstrap


Setup Instructions ->

1. Clone Git repo,
2. Install all dependcies with NPM INSTALL command:
3. Run server with (npm start)


Light House Report :

![Screenshot from 2020-09-06 23-46-04](https://user-images.githubusercontent.com/25228724/92333097-6cdbd000-f0a0-11ea-8ac3-21a900e4ff13.png)

Comments Over Light House Report:

1. Performance and Accessblity is Low because of Large Amount Payload as image are coming from Internet so If I have a reference of image in local then performance would be drastically improve as browser would take less amount of time to render JS or resolve the JS dependency.

2. We can use React Lazy and Suspense also for performance Improvement although I did not use beacuse major blocker in my case is large image only.



Features ->

1. After you applied filters , without refereshing the whole page result would be updated and URL is changing also.


2. I have used central state management system that is redux with some middleware as Thunk and logger.

3 . My main focus was on Minimum Re rendering of components , I have written the code in way also .So I did not extra care of Styling part.  


Other Improvement Ideas:

1. We can Split code in chunks based on our requiremtns  by using Suspense and React Lazy.
2. We can Implement Error Boundary Component also although I did not do because of time constraint .
3 For Images we shoudl use SVG as I read somewhere that by importing them as react component they will give faster rendering .
4. SSR at very first rendering would definitely going to boom the performance . We can implement SSR using some Java Script framework like Next js or React It self support SSR.
5 . using PURE Component idea is also sometime improve the performance metric.


