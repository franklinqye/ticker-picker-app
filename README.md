https://tickerpicker-257205.appspot.com/

^^Our hackathon API tokens expired so this no longer works 

Ticker Picker is an application that recommends which stocks to buy based on machine learning algorithms. The core of our application is a recurrent neural network which uses market data from the Goldman Sachs Marquee API. The neural network combines this data with additional information from sentinent analysis that we ran on the top tweets of the stock name using Google's Cloud Natural Language API and Twitter's Standard API. The output of the neural network is fed through a softmax function which ultimately classifies the stock into one of three categories: buy, hold, or sell.