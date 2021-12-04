1. **Write a function that detects if two strings are anagram e.g. ‘bleat’ and ‘table’ are anagrams but ‘eat’ and ‘tar’ are not.**

   > Source and test codes on github [https://github.com/mjahmed-wd/findAnagram](https://github.com/mjahmed-wd/findAnagram)

2. **Explain the design pattern used in following:**

   ```
       interface Vehicle {
           int set_num_of_wheels()
           int set_num_of_passengers()
           boolean has_gas()
       }
   ```

   2.a. **_Explain how can you use the pattern to create car and plane class?_**

   > Question 2 shows an interface, the Vehicle interface includes three properties set_num_of_wheels, set_num_of_passengers and has_gas. Where has_gas is a boolean value, others are number.
   > To create a "Car" or "Plane", we can simply implement the interface in a concrete class, I solved this using TypeScript.

   ```TS

        class VehicleCreate implements Vehicle {
        set_num_of_wheels: number;
        set_num_of_passengers: number;
        has_gas: boolean;

        constructor(
            set_num_of_wheels: number,
            set_num_of_passengers: number,
            has_gas: boolean
        ) {
            this.set_num_of_wheels = set_num_of_wheels;
            this.set_num_of_passengers = set_num_of_passengers;
            this.has_gas = has_gas;
        }
        }

        const car = new VehicleCreate(4, 5, true);
        const plane = new VehicleCreate(2, 200, false);
   ```

   2.b. **_Use a different design pattern for this solution._**

3. **Write a video player application with ‘Play’, ‘Forward’ , ‘Rewind’ functionalities. Please write pseudocode for this program and explain the design pattern you will use to develop these three functionalities.**

   > Live Link: [Video Player](https://video-player-jubair.netlify.app/)
   > Code on github [https://github.com/mjahmed-wd/video-player-react](https://github.com/mjahmed-wd/video-player-react)
