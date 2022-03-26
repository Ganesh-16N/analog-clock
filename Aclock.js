            setInterval(() => {
                d = new Date();

                h = d.getHours();
                mn = d.getMinutes();
                sd = d.getSeconds();

                hour = 30 * h + mn / 2;
                minute = 6 * mn;
                second = 6 * sd;

                snd.style.transform = `rotate(${second}deg)`;
                mnt.style.transform = `rotate(${minute}deg)`;
                hr.style.transform = `rotate(${hour}deg)`;
          }, 1000)
