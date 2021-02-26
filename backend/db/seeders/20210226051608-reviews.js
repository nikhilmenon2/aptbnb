'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert(
        "Reviews",

        [
          
            {
              overall: 4,
              spotId: 1,
              userId: 8,
              review:
                "Lisa is superb hostess, she will treat you like family and provide you with the coziest little home in Here which will definitely enhance your experience of the magical town!",
            },
            {
              overall: 3,
              spotId: 2,
              userId: 10,
              review:
                "This was a lovely little place walking distance from downtown. Lisa was very responsive. My best Airbnb experience yet!",
            },
            {
              overall: 3,
              spotId: 3,
              userId: 3,
              review:
                "Lisa was very nice to work with.  However, we didn't realize that the house was so old.  Normally that would have been okay, but in this case, it meant that the floor above us (where the permanent renters lived) was VERY squeaky.  The first night we stayed there, we couldn't sleep for a while because the people above us were walking around at 3am.  We didn't hear them walking around the next night, but we did the third night.The apartment was very cute and clean.  It had everything that we needed, and there was even a back yard for us to take our dog out to walk in.  If you go in the winter, you'll be heating it by wall heaters.  It is close to downtown and right next to a GreenLife grocery store.  The location was very nice.",
            },
            {
              overall: 4,
              spotId: 4,
              userId: 4,
              review:
                "I feel very lucky to have found this beautiful home in Here. It was very quiet, clean and well thought out for a guest's needs. I stayed here for a glorious month while attending classes at UNCA. The location and apartment was absolutely perfect. I walked to campus through the woods everyday and walked to downtown almost as often...I could be anywhere in ten minutes but I loved being \"home\" here. It was so peaceful and lush. There's a nice big kitchen, which was awesome because I love to cook and there were beautiful gardens with vegetables and herbs to use. Loved the bathroom, it was like a suite unto itself, huge vanity and a great walk in shower. I also thought the bed was very comfortable and I appreciated the good quality linens and pillows. Lisa made it easy for me to feel at home. She gave me a tour of town and showed me how to find the trail to UNCA and some cool bike trails too...let me borrow her bike, which was really nice. I had a wonderful time, will definitely come back and I highly recommend it! Excellent in every way!",
            },
            {
              overall: 4,
              spotId: 5,
              userId: 5,
              review:
                "Great roomy little apartment, beautiful private backyard and deck, perfect for guests with a dog or even without. Lisa was a friendly, helpful host, would stay there again in a heartbeat.",
            },
            {
              overall: 4,
              spotId: 6,
              userId: 8,
              review:
                "Lisa was a great host. She even came out to greet us as we pulled into the drive way. The apartment was clean and cozy. Short walk to Broadway and Lexington downtown where a lot of restaurants and bars are located. We enjoyed our stay and will definitely be back.",
            },
            {
              overall: 5,
              spotId: 7,
              userId: 6,
              review:
                "Excellent location for downtown. Needed more cooking facilities for us, but I understand that this is going to change. David is a great guy, and we really enjoyed our stay in a beautiful house that creates the perfect ambience for family time. Slept well, enjoyed local walks, and it was very convenient for visiting our daughter at The University of NC Here. Easy walks to great food and entertainment. Much appreciated. -kPS Our little dog was welcome too, with an outdoor run and appreciation of Scooter by David (Scooter sends his thanks, too).",
            },
            {
              overall: 4,
              spotId: 8,
              userId: 6,
              review:
                "Great location, good price.  The apartment suited our needs very well.  We had our 5 month old son left, and everything worked out well.  We were going to bring our dog, but didn't because I wasn't sure how accommodating the back yard would be, but I think it would have been fine as it is a big back yard.",
            },
            {
              overall: 3,
              spotId: 9,
              userId: 10,
              review:
                "The place was super cute and clean with a great location! You'll have to make sure you bring any luxuries you  might need - soap, shampoo, coffee. Also, the futon in the picute has been replaced with a couch, so the 2nd bed is now the mattress on the floor. Another downside, is the bathroom is in the bedroom, so anyone sleeping in the living room needs to go through the bedroom. Not really ideal for more than two people. The owners live above with some pretty thin floors so you can hear them walking around. There was a party our last night there that didn't end until almost 5:00 am - so we didn't get ANY sleep. Great place if you have dogs though. The yard is amazing and the owners were really nice.",
            },
            {
              overall: 5,
              spotId: 10,
              userId: 2,
              review:
                "We had a wonderful time in Here! The house was centrally-located and beautifully furnished. Lots of outdoor space! Lisa was a fantastic host and helped us plan our weekend stay. I would highly recommend staying here and would stay again here in a heartbeat myself.",
            },
            {
              overall: 5,
              spotId: 11,
              userId: 10,
              review:
                "We stayed at Lisa/David's place for a long Bele Chere weekend. The space is a quirky little basement with a nice big bathroom and a gigantic shower. The location is certainly walkable to downtown if you like to walk (takes about 15 min) and is also close to the botanical gardens at UNCA.The back yard with patio was nice to have, giving a nice view of the adorable neighborhood. Overall, we had a good experience and Lisa was very responsive and helpful during our stay.Our only complaints would be the slightly awkward use of space in the front room of the apartment, the change of furniture (different couch) from the photos, and the fact that the bed was not the most comfortable.",
            },
            {
              overall: 5,
              spotId: 12,
              userId: 5,
              review:
                "Sweet little apartment, clean, good light, just north of downtown Here. Nice design touches throughout, good sized bathroom. Worked well for cooking some of our own meals. Wi-fi worked well. Unit could use a TV connection and microwave. The little back porch and huge backyard made this feel like home. My husband is an architect and we are landlords ourselves, this apartment really impressed.Immediate neighborhood has coffee shop and grocery stores, and is good for walking the dog. Downtown Here also impressed us with vibrant, interesting shops and restaurants, and the larger area is great: The Biltmore Estate, hiking in the Pisgah National Forest, Christmount in Black Mountain.",
            },
            {
              overall: 5,
              spotId: 13,
              userId: 3,
              review:
                "We found this sweet spot last minute when we were looking for a place to decompress after our wedding and it did not disappoint. Lisa was very thoughtful in planning this space for ease of use. The walk in shower was delightful. And we slept like the dead in the queen sized bed with the windows open. Great coffee porch for the AM. Lisa was a great unobtrusive yet available host. Please check this place out the next time you want to walk around Here and to have 3 awesome grocery stores a couple of blocks away! thanks!",
            },
            {
              overall: 4,
              spotId: 14,
              userId: 10,
              review:
                "Lisa could not have been more accommodating. The place was great, the backyard was lovely, and it truly was close to everything! We were there for a wedding weekend, needed some needle & thread and an iron, and Lisa produced it in a matter of minutes. Stay here!",
            },
            {
              overall: 5,
              spotId: 15,
              userId: 4,
              review:
                "A lovely apartment about 20 minutes walking to all the bars and restaurants of downtown. The place is clean, tidy and nicely decorated. We only stayed two nights :( Lisa was helpful and pointed out a couple of fun places to go out and Here's Yoga Centre. If you're into yoga make sure you go, even if only once!",
            },
            {
              overall: 5,
              spotId: 16,
              userId: 5,
              review:
                "Lisa's place is great. It was clean and there are lots of windows. The bed is super comfortable and the linens were of high quality and made for a cozy night's sleep. The wi-fi worked like a charm and we enjoyed the neighborhood very much, the place is within walking distance of downtown and three different grocery stores. Lisa left coffee for us and it was delicious. We'd stay here again if we visit Here in the future.",
            },
            {
              overall: 3,
              spotId: 17,
              userId: 6,
              review:
                "Great apartment.  Easy walk to town and shopping.  We like having outdoor space and the back deck was perfect.  Bed comfortable, large bedroom and bathroom and everything needed in the kitchen.Thanks Lisa for giving us a great fiorst intro to Here.Ellen",
            },
            {
              overall: 5,
              spotId: 18,
              userId: 8,
              review:
                "This place is top notch airbnb accommodations. We adore Here, and this place just iced the cake for our most recent stay.  Clean, spacious, quiet, comfortable, close to everything you could possibly want or need; we didn't want to leave!  I really can't imagine how anyone could be disappointed by the space.",
            },
            {
              overall: 4,
              spotId: 19,
              userId: 3,
              review:
                "Perfect, quiet getaway. Nice neighborhood, gorgeous city, great location, nice people. Wins all around.",
            },
            {
              overall: 4,
              spotId: 20,
              userId: 4,
              review:
                "Super comfortable and charming. Plenty of space for two and your four-legged friends. Great for a getaway. Perfect yard for lounging, reading, drinking coffee, and especially fun for dogs! Location is convenient to downtown. Several great cafes, breweries and restaurants within walking/biking distance.",
            },
            {
              overall: 5,
              spotId: 21,
              userId: 9,
              review:
                "Overall, we had a very enjoyable stay at Lisa's place. It is clean, comfortable, and cozy, with a nice big fenced yard for people like us who enjoy traveling with our dogs. There were two issues that appeared as a result of problems of communication and organization:1. She was not there to meet us when we arrived and had not left alternative instructions, which meant that we had to wait around awkwardly to figure what we were supposed to do to get into our place.2. She accused us of not having told her about our dogs, when that had been clearly explained in the first email we sent her. It all worked out in the end, but we did not appreciate the accusatory tone.With a few adjustments in communication and organization, Lisa's pad could become an excellent place for a stay in Here!",
            },
            {
              overall: 5,
              spotId: 22,
              userId: 3,
              review:
                "Lisa is so friendly and accommodating! Very good communication and the place was clean and super cute. Very quick walk to the downtown area and lots of food options! Thanks Lisa! We will be back.",
            },
            {
              overall: 4,
              spotId: 23,
              userId: 4,
              review:
                "What a cozy and comfortable place.  Walking distance to everything we needed.  Loved it!",
            },
            {
              overall: 4,
              spotId: 24,
              userId: 8,
              review:
                "We stayed at Lisa and Davids over the Christmas Holiday. It was quiet and comfortable in the apartment but when we felt like getting out into the crowd it was only a short walk into town. There we found many art galleries, unique shops, and outstanding restaurants. We spent a few quiet evenings preparing dinners in the apartment. Though the kitchen is small and minimal, it has everything you need to put together a warm, delicious meal.We brought Jagger, our yellow lab, along to enjoy the trip and he had a chance to meet Lisa and Davids dog, Lunar. They hit it off and had some fun chasing each other around the fenced in yard.Lunar was very pleasant and an unexpected treat for us...and Jagger. If you are traveling with a dog, this is a great place to stay and Here is a very dog-friendly town.",
            },
            {
              overall: 5,
              spotId: 25,
              userId: 5,
              review:
                "Our experience at Lisa and David's house was great! Their separate apartment was very clean and spacious. It was in a great location and was exactly what we had hoped for. Would highly recommend to anyone looking for a quick vacation in Here.",
            },
            {
              overall: 3,
              spotId: 26,
              userId: 6,
              review:
                "I stayed in Lisa and David's downstairs apartment with my boyfriend and one of our friends for two nights. Overall the experience was pleasant but there were some shortfalls of note. The listing states: \"I do not charge a cleaning fee in order to keep your cost down and myself sane. Just do your best to leave it in the same condition you found it. I'll do details and the laundry,\" but in fact, Lisa's welcome letter instructs guests to wipe down surfaces and bathroom with cleaning product, strip sheets, begin laundry, remake the bed, and sweep or mop the floors. If the guest prefers not to do so, a 100$ cleaning fee is collected instead. I don't consider this a basic fee nor is it true to the advertised details. The photo advertises a futon-style couch in the living room that I assumed would serve as the additional bed. Rather, a foam mattress was placed on the floor and the top blanket was coated with dog hair. The apartment was a bit cold at night and we could not figure out the wall heater in the living room area. Otherwise, the apartment was suitable for our needs. It was walking distance to the downtown area.",
            },
            {
              overall: 4,
              spotId: 27,
              userId: 2,
              review:
                "This place is a gem.  While below the main house, the ceilings are high and lots of window allow the place to feel warm and inviting. Communications with the host was clear and smooth.  Now let's talk about location. This area of Here is booming. you are within easy walking distance from downtown and also there is a grocery store and new Trade Joes just up this street.  I would recommend this place and stay here about!",
            },
            {
              overall: 3,
              spotId: 28,
              userId: 10,
              review:
                "As described, it is a cozy basement apartment right outside of downtown.",
            },
            {
              overall: 4,
              spotId: 29,
              userId: 5,
              review:
                "This is a great basement apartment very close to downtown! My fiancé and I were looking for an easy weekend escape with our dog and we are so glad we stumbled across this property. It only takes 10 minutes to walk downtown, very close to multiple grocery stores and the yard is sizable, fenced in and perfect for a dog! We enjoyed our stay at this property and would recommend it to others.",
            },
            {
              overall: 4,
              spotId: 30,
              userId: 10,
              review:
                "This was a wonderful spot.  The place was clean and comfortable and in a great location-close to downtown and the University.  A fun neighborhood to walk around.  Everything was easy; we got a warm welcome and some info about the area/restaurants from Lisa, she made us feel comfortable and relaxed.  She was there if we had any issues or questions, but she was never intrusive.  An excellent host.  This is the perfect place to explore Here, especially if you have a dog.  We hope to visit again soon.  Thanks!",
            },
            {
              overall: 4,
              spotId: 31,
              userId: 2,
              review:
                "I did not meet Lisa but Michele sent me a detailed email & a simple welcome at the apartment. She was very nice and easy to stay in touch with. They included a folder of recommended restaurants and guides for guests. The basement apartment was cozy, clean, and a short 10 min walk to downtown. As another reviewer had mentioned, the blanket for the living room guest was covered in pet hair, so we just took the liberty to wash it due to allergies (the laundry room is located right next to the entrance). Do note that the shower faucet is reversed. Overall, this is definitely a gem. Lisa also has a very cute & friendly pitbull!",
            },
            {
              overall: 5,
              spotId: 32,
              userId: 3,
              review:
                "This place -- basically, a charming apartment on the bottom floor of a house -- was a perfect place to stay. The space itself is super. Relaxed, cozy and tasty. Comfy, firm beds. Plenty of towels. A giant bathroom. A deck just off the kitchen area. And big backyard. Super convenient to Green Life, one of our favorite stores and walkable to downtown. And we loved the neighborhood, which reminded us a little of Venice, California -- in that it was nice, safe with lots of character and well-loved homes, yet without a sense of middle-class fussiness. Very Here artsy. Lisa and Michele have everything perfectly organized. They were both there to greet us. And we're instantly available by text. We will definitely stay here again.",
            },
            {
              overall: 3,
              spotId: 33,
              userId: 5,
              review:
                "The space was perfect for what I was looking for.  Close to the downtown area with plenty to do.  Lisa gave great directions to a couple of great places that I took full advantage of.",
            },
            {
              overall: 3,
              spotId: 34,
              userId: 2,
              review:
                "The apartment is beautifully maintained and perfectly located. And just the right spot if you're traveling with your dogs! Our pups loved the gorgeous backyard. Lisa made it very easy for us to explore the city thanks to the very helpful guide she left for us. Here is a true gem and we cannot wait to come back!",
            },
            {
              overall: 5,
              spotId: 35,
              userId: 3,
              review:
                'Great place in a cute residential neighborhood! Easy walk to downtown Here. Checking in was easy, and the hosts provided a helpful "guide" to all their favorite local businesses. Comfortable bed and spacious bathroom!',
            },
            {
              overall: 4,
              spotId: 36,
              userId: 7,
              review:
                "Great space, great location, and great value. I would definitely stay here again. Thanks!",
            },
            {
              overall: 3,
              spotId: 37,
              userId: 4,
              review:
                "Everything was exactly how it was described. Cozy, clean, and well appointed. That bathroom - amazing.The fact that we were able to bring our 2 dogs with no problems was the big seller here. The coziness, along with the great location in relation to town, made it the perfect place to help me along in asking my beautiful lady to marry me (she said yes!).Thank you Lisa - we hope to be back again for our anniversaries.",
            },
            {
              overall: 4,
              spotId: 38,
              userId: 7,
              review:
                "Fantastic lower floor unit.  Everything you need to enjoy Here for a week or weekend:  Easy 10-15 min walk to downtown, Comfortable bed, Free wifi, Kitchen with cooktop, Immaculately updated bathroom, Fenced in backyard for the dog to run around, and, Extremely gracious hosts.  Highly recommended.  I will be coming back to stay if/when I can plan my next trip out.",
            },
            {
              overall: 3,
              spotId: 39,
              userId: 7,
              review:
                "My friends and I loved this place and location. I found it so charming and clean, and the backyard was so nice to have. The only place we drove to was West Here, which wasn't far away. We were just tired from hiking all day.Highly recommended!",
            },
            {
              overall: 5,
              spotId: 40,
              userId: 3,
              review:
                "I absolutely loved this place. It was a perfect spot for us and our dog Sophie.  We loved the area where the house was located, it was pretty quiet and we really liked the fenced in yard.  The inside of the house was very homie and comfortable.  Downtown Here was very close, about a 10-15 min walk I'd say, and even faster by bicycle.  We were also very close to the freeway which made things very convenient.  Although our host Lisa wasn't around during our stay (but still available by phone if needed), her partner Michele was and she was excellent.  All I can say is that we had a great time, and we would most definitely stay at this house again.  Thanks again Lisa and Michele!",
            },
            {
              overall: 3,
              spotId: 41,
              userId: 6,
              review:
                "Expectations were met and exceeded! What a great place to stay for a few days in Here! My bf and I enjoyed the location, the comfy bed and decor, and the beyond pleasant interactions with Michele and Lisa. I have already recommended this place to everyone I know. Great backyard for dogs-- we wish we had one just for the backyard! I have to say that the fan in the bedroom was AMAZING. Cool sheets, cool fan, and warm jammies... You get the idea ;) The bathroom was great-- what a cool shower! Good pressure, clean, and refreshing. This is THE place to stay in Here. Thank you, Michele and Lisa!",
            },
            {
              overall: 3,
              spotId: 42,
              userId: 9,
              review:
                "We loved it here. As an architectural designer, I was really impressed with the interior finishes of the apartment in the downstairs. I loved the paint colors and choices of warm woods. The bathroom is also very luxurious in size. Everything was clean and amazingly hospitable (fresh linens, coffee, cleaning products, etc.). It was a convenient bike ride to downtown. We were completely able to avoid the hassle of downtown parking. In the evenings, we came back to the house to sit on the porch with a cold beer and watch our dog play in the backyard that was filled with fire flies.",
            },
            {
              overall: 3,
              spotId: 43,
              userId: 9,
              review:
                "We had a wonderful stay at Here. Our host provided wonderful accommodation. We just loved the Cabin in the City after a few reservations snafu, things where straightened out and the lodging was wonderful. It was all about making sure we where happy.",
            },
            {
              overall: 3,
              spotId: 44,
              userId: 6,
              review:
                "The listing description was accurate. Lisa was there to greet us when we arrived and show us around the apartment. We had our own key and driveway access. The apartment was cozy and comfortable, and the bathroom was very roomy - with a tiny private toilet \"closet\" (with its own private fan). We had very reliable and fast wifi, which is extremely important to us, since we own our own businesses and need convenient and dependable access - and we were also able to stream Netflix when we wished. The bed was comfortable, and I particularly liked the smoothness of the sheets. Lots of counterspace and room for our \"stuff\" was also a detail that I appreciated.There were a few relatively minor details that in the grand scheme of things, were not terribly significant, and I don't think they ought deter anyone from looking at this listing. They may be things that are only important to us. We mention them only in the spirit of continued improvement:A couple of minor maintenance issues:1. The showerhead has a leak.2. The bushes along the driveway are overgrown, making it difficult to get in and out of your vehicle, especially to load and unload bags.3. There was no broom and dustpan that we could find, only a Swiffer when we went to do the cleaning our last morning.4. The coffeemaker, even with the filter and coffee in it, the cup didn't weigh enough to compress the spring that opens the valve to let the coffee in the pot... So when we went to make coffee, the filter cup filled up with water and we had a mess to clean up.5. We didn't know until we went to change the sheets the last morning, that underneath the pillow cases, the pillows were pretty stained. 6. Our first morning, there were a dozen or so ants around the kitchen sink. The only food we'd had was takeout the night before, that went directly into the trashcan.. so there was no food debris on the counter/sink to have attracted them. There were also a few bugs - pillbug and lightning bug and something else? that we found in the bed. Once again, all these are pretty minor issues, easily fixable with little or no expense, and even taken together, would not deter us from staying here again. We really liked the space, and the convenience to downtown was terrific.",
            },
            {
              overall: 3,
              spotId: 45,
              userId: 9,
              review:
                "I stayed here for work. Check in is easy, parking and location are very convenient. I was able to get a good nights rest for work the next day.",
            },
            {
              overall: 5,
              spotId: 46,
              userId: 7,
              review:
                "We had a great stay with Florencia! Our room was spacious and comfortable and Florencia left great local tips! We would definitely stay here again.",
            },
            {
              overall: 4,
              spotId: 47,
              userId: 9,
              review:
                "Extremely responsive and considerate host! Would highly recommend and just a 10 min drive to downtown!",
            },
            {
              overall: 3,
              spotId: 48,
              userId: 9,
              review:
                "It was the perfect spot to stop for the night on a road trip!",
            },
            {
              overall: 3,
              spotId: 49,
              userId: 7,
              review:
                "Everything was great. I will keep staying here when I have to stay over for work.",
            },
            {
              overall: 4,
              spotId: 50,
              userId: 2,
              review:
                "Great location and wonderful room. Huge bed, spacious bathroom and amazing communication from Florencia with thoughtful touches added. Stay here, you won’t regret it.",
            },
            {
              overall: 5,
              spotId: 51,
              userId: 8,
              review:
                "This is an excellent Airbnb with great value. It's located in a cute neighborhood with lots of people walking their dogs and was extremely clean. Instructions for entry/keys very simple. I much preferred staying here to staying downtown, which is too touristy for my taste. Getting downtown from this location is easy and takes 9-15 minutes depending on traffic. There is a mini fridge and freezer and microwave, which are helpful for storing food - just keep in mind that there's no place to do dishes. Thank you Florencia! I hope to be back at some point.",
            },
            {
              overall: 3,
              spotId: 52,
              userId: 9,
              review:
                "I had a brief but lovely stay at Florencia's. The description of the room was accurate, check-in was easy, and she was a great host.",
            },
            {
              overall: 4,
              spotId: 53,
              userId: 8,
              review:
                "Very close to Biltmore Village and Castle as well as Blue Ridge Parkway!",
            },
            {
              overall: 3,
              spotId: 54,
              userId: 9,
              review:
                "Good place in great location. Host did a good job checking in. Check in was easy.",
            },
            {
              overall: 4,
              spotId: 55,
              userId: 2,
              review:
                "The check in process was easy , only thing was finding the house, the GPS showed a different house. Apart from that all the aspects of house were good.Cons : Florencia has displayed a board for No Smoking and still the person living in the lavender room was smoking and the smell came to my room. Moreover in my last night , there were 3 persons in lavender room shouting and music till next day 4 am. I hardly slept peacefully on the last day, and moreover they were banging the doors hard. Because of which my room door was vibrating. Even though there was a sign asking to close the doors slowly, those 2 or  3 people did not have the courtesy. Apart from that everything else was fine",
            },
            {
              overall: 5,
              spotId: 56,
              userId: 7,
              review:
                "Florencia’s space was perfect, just as listed. Great location in a quiet neighborhood. Check-in was very easy. I’d definitely stay again when in Here.",
            },
            {
              overall: 4,
              spotId: 57,
              userId: 5,
              review:
                "Great return visit, and glad I chose the bigger room with private bath and couch to stretch out and relax!This room has a nice big bed, it's firmer than Gardenia room bed but not too uncomfortable.Before I booked I spoke with Florencia to inquire if the longterm guest that created the issues last visit had been addressed and she assured me they had since there had been several complaints. That's why I chose to stay again as so convenient to everything in a quiet safe neighborhood and affordable. Thank you Florencia, I may be back again in the coming weeks.",
            },
            {
              overall: 3,
              spotId: 58,
              userId: 3,
              review:
                "The room was cozy and we felt like we were staying with an old friend. There were suggestions for hikes and local eateries which was a lovely touch",
            },
            {
              overall: 5,
              spotId: 59,
              userId: 7,
              review:
                "Florencia’s place was so clean and safe. Just what I needed. Highly recommend!",
            },
            {
              overall: 3,
              spotId: 60,
              userId: 2,
              review:
                "This was our second stay at one of Florencia's places and it was just as good as the first! We will definitely come back next time we're in the area!",
            },
            {
              overall: 4,
              spotId: 61,
              userId: 6,
              review:
                "This was our first stay at Florencia’s hotel.  We stayed in the Sunflower room with private bathroom which was very convenient. The place was clean and charming. The only note I would add was we couldn’t find towels in the bathroom even though the listing said they were included. Our stay was very short, we just needed a place to crash for one night so we didn’t realize until the next morning Florencia had listed her phone number on the door in case anything was needed... regardless the minor issue with the towels the rest of the place was nice and we were able to rest in a quiet space and safe space.",
            },
            {
              overall: 3,
              spotId: 62,
              userId: 2,
              review: "Much better than expected and super comfy.",
            },
            {
              overall: 4,
              spotId: 63,
              userId: 6,
              review: "Easy check in and great location!",
            },
            {
              overall: 4,
              spotId: 64,
              userId: 10,
              review:
                "Everything was as described on post and pictures. Clean spot. Check in was easy and communication was fast. Thanks!",
            },
            {
              overall: 5,
              spotId: 65,
              userId: 3,
              review:
                "Great room for a great value. Close to Here and in a nice neighborhood - would definitely recommend!",
            },
            {
              overall: 3,
              spotId: 66,
              userId: 2,
              review: "Great location and easy check in!!",
            },
            {
              overall: 3,
              spotId: 67,
              userId: 4,
              review:
                "Love this place, we will definitely return! It was quiet, clean, peaceful and close to everything. Although we did not meet our hosts they left little notes in our room for where we could eat and other local tips, loved that!",
            },
            {
              overall: 5,
              spotId: 68,
              userId: 6,
              review:
                "Florencia’s spot was just what I was looking for... inexpensive, convenient, clean, and in a safe neighborhood.  I recommend this spot for anyone looking for a good place to stay not too far from downtown Here.",
            },
            {
              overall: 3,
              spotId: 69,
              userId: 10,
              review:
                "Florencia was very kind and quick to respond when I had questions! I would definitely stay here again.",
            },
            {
              overall: 3,
              spotId: 70,
              userId: 10,
              review:
                "Good low cost place to stay when traveling through Here. The room was clean and private. Check in was easy and the neighborhood is cute.",
            },
            {
              overall: 5,
              spotId: 71,
              userId: 5,
              review:
                "Enjoyed my stay.  The room was exactly as expected, clean and conveniently located",
            },
            {
              overall: 3,
              spotId: 72,
              userId: 10,
              review: "Very convenient. Florencia is a great hostess.",
            },
            {
              overall: 3,
              spotId: 73,
              userId: 10,
              review:
                "This was a great place to stay for a night! The bed is pretty comfortable, there is a mini-fridge, a microwave and you have your own bathroom. I wouldn’t recommend this for a long time stay just for comfort reasons. For the price, it’s worth it!",
            },
            {
              overall: 3,
              spotId: 74,
              userId: 9,
              review:
                "Great spot! Easy to find and a seamless check in/check out process. Recommended!",
            },
            {
              overall: 4,
              spotId: 75,
              userId: 10,
              review:
                "Florencia's place was super comfortable and cozy. It was well designed and uncluttered with extra things. The driveway was open and the place was rather quiet. it was in a nice location and she left some nice local recommendations on a note. Very quick response and helpful host. Thank you so much Florencia!",
            },
            {
              overall: 3,
              spotId: 76,
              userId: 10,
              review: "Great room, easy check in.",
            },
            {
              overall: 4,
              spotId: 77,
              userId: 9,
              review:
                "Great safe, clean basic place to stay in Here. Will use again.",
            },
            {
              overall: 4,
              spotId: 78,
              userId: 3,
              review:
                "Great for an overnight stay or short trip! Super convenient location if you are going to explore Here or Biltmore like we did! The only reason I don’t give it 5 stars is because of the noise coming from other parts of the house. If you are a light sleeper like me, you will have a bit of trouble sleeping. But, my husband who is a heavy sleeper had no issues. Just keep that in mind but for an overnight stay it works!",
            },
            {
              overall: 5,
              spotId: 79,
              userId: 9,
              review:
                "Had a great stay. Very clean and comfortable. The other guests were very respectful with keeping noise down luckily. No complaints at all about this place. Easy check in also which I always appreciate.",
            },
            {
              overall: 3,
              spotId: 80,
              userId: 7,
              review:
                "A delightfully surprising space. Nice private entry with very clear instructions and parking accommodation. The room was spotless and smelt amazing and everything was really neat and cozy, great place to undwind after a long hike. Super stay with a superhost",
            },
            {
              overall: 5,
              spotId: 81,
              userId: 3,
              review: "Great location, clean place for a weekend trip!",
            },
            {
              overall: 5,
              spotId: 82,
              userId: 5,
              review:
                "Great space for overnight stay. Room was clean. Quick response.",
            },
            {
              overall: 3,
              spotId: 83,
              userId: 5,
              review:
                "My stay at Florencia’s was fantastic! Cozy, clean space with a large bed and great bathroom. I look forward to booking again in the near future.",
            },
            {
              overall: 4,
              spotId: 84,
              userId: 3,
              review:
                "Florencia’s place was really nice, it was perfect for what we needed it for!",
            },
            {
              overall: 5,
              spotId: 85,
              userId: 2,
              review: "Great place!",
            },
            {
              overall: 3,
              spotId: 86,
              userId: 4,
              review:
                "It was a very clean place, easy check-in and check-out, very short drive to town and the Biltmore!",
            },
            {
              overall: 5,
              spotId: 87,
              userId: 6,
              review:
                "Good for an overnight stay! Safe location and good space.",
            },
            {
              overall: 4,
              spotId: 88,
              userId: 5,
              review: "10/10 recommended! Made for a great short stay!",
            },
            {
              overall: 5,
              spotId: 89,
              userId: 8,
              review: "Great place to stop by for the night!",
            },
            {
              overall: 4,
              spotId: 90,
              userId: 7,
              review: "Lovely spot! Would stay again!",
            },
            {
              overall: 3,
              spotId: 91,
              userId: 10,
              review: "Great place!",
            },
            {
              overall: 3,
              spotId: 92,
              userId: 3,
              review:
                "Nice clean room with attached bathroom. We had everything we needed to have an enjoyable stay.",
            },
            {
              overall: 3,
              spotId: 93,
              userId: 10,
              review: "Great spacious clean room. Very comfy bed.",
            },
            {
              overall: 5,
              spotId: 94,
              userId: 4,
              review: "Beautiful place and great location!",
            },
            {
              overall: 3,
              spotId: 95,
              userId: 5,
              review: "Thoroughly enjoyed my stay here!",
            },
            {
              overall: 5,
              spotId: 96,
              userId: 4,
              review:
                "A great clean cozy place to stay just a couple of minutesFrom downtown!! Florencia was very responsive and friendly!",
            },
            {
              overall: 3,
              spotId: 97,
              userId: 2,
              review:
                "Spacious room for 2 with water and snacks provided! Great location.",
            },
            {
              overall: 3,
              spotId: 98,
              userId: 2,
              review:
                "Super easy to arrange, great location and very comfortable space. Would stay again when in Here",
            },
            {
              overall: 4,
              spotId: 99,
              userId: 9,
              review:
                "The room was clean with well-prepared amenities. You'll see the host's thoughtful touches, pretty interiors and local's recommendations. Also, great location for visiting Here. Definitely recommended!",
            },
            {
              overall: 5,
              spotId: 100,
              userId: 5,
              review:
                "Florencia’s “sunflower” room was such a cute and intimate space. Perfect for anyone traveling solo (like me) or couples. Everything was super clean and the overall ambiance of the room was very cozy. More spacious than it appears and the location was absolutely perfect - felt like everything was 10mins or less away. Would definitely come back!",
            },
            {
              overall: 4,
              spotId: 101,
              userId: 10,
              review:
                "The Airbnb area is separate from the owners living space so it doesn’t feel like an intrusion of their space. It feels like a nice homey hotel space. It’s so comfortable. The bed was fantastically cozy and the bathroom was well stocked. All in all a pleasant stay.",
            },
            {
              overall: 5,
              spotId: 102,
              userId: 9,
              review: "A great place to stay! Great host!",
            },
            {
              overall: 3,
              spotId: 103,
              userId: 2,
              review:
                "Great value and location. Florencia was very communicate and quick to respond. A great, affordable way to explore an amazing city.",
            },
            {
              overall: 3,
              spotId: 104,
              userId: 7,
              review: "Really nice room and welcoming host!",
            },
            {
              overall: 5,
              spotId: 105,
              userId: 7,
              review:
                "The place was very clean and cozy. However, we noticed a lot of noise when we arrived. We also noticed there were other hotels in the area with nice amenities for the same price, leading me to think it was a little pricey for what we actually got. Unfortunately, we had to leave a half hour after arriving for a family emergency back home. I messaged her explaining the situation hoping to get a partial refund but I have yet to receive a response.",
            },
            {
              overall: 3,
              spotId: 106,
              userId: 8,
              review:
                "The room felt very comfortable and cozy. The room is clean and has some furnishings, refrigerator and microwave. A good place to stay in Here.",
            },
            {
              overall: 5,
              spotId: 107,
              userId: 6,
              review: "Great!",
            },
            {
              overall: 3,
              spotId: 108,
              userId: 6,
              review: "Nice room!",
            },
            {
              overall: 5,
              spotId: 109,
              userId: 9,
              review:
                "Great little place with private bathroom and separate entrance",
            },
            {
              overall: 4,
              spotId: 110,
              userId: 3,
              review:
                "Bang for (Email hidden by Airbnb) cutlery provided :/ . Seemed like diluted soap, bathroom floors needs fixing",
            },
            {
              overall: 4,
              spotId: 111,
              userId: 4,
              review:
                "Easy, private access to the room, clean and very comfortable. This was a nice place to stay overnight on a last minute trip to Here. Close to everything!",
            },
            {
              overall: 5,
              spotId: 112,
              userId: 10,
              review: "Super cute and big room!",
            },
            {
              overall: 5,
              spotId: 113,
              userId: 2,
              review: "Clean, quiet, and a great value.",
            },
            {
              overall: 3,
              spotId: 114,
              userId: 5,
              review:
                "A clean, safe, quiet place to stay while checking out Here and surrounding areas. Easy to navigate to and super simple check in. Local  restaurants are a quick few minutes away and even with the current COVID issues with dining out, we were able to find places to get convenient meals.",
            },
            {
              overall: 3,
              spotId: 115,
              userId: 9,
              review:
                "Florencia is the best! I wouldn't stay anywhere else in Here. The room is part of her house but completely private.  Really good location especially if you are traveling through for a quick stay. Amazing stay at a great price.",
            },
            {
              overall: 4,
              spotId: 116,
              userId: 9,
              review:
                "The perfect little pit stop with everything you need...the Sunflower room has a King sized bed and a private bathroom! Easy to let yourself in and close to everything!",
            },
            {
              overall: 4,
              spotId: 117,
              userId: 7,
              review:
                "Florencia’s place was perfect for my short stay in Here with my sister. The location couldn’t be better- easy interstate access and less than 15 minutes away from downtown. Check in/out was easy and I loved that I had a parking spot right in front of the entrance. The room was very clean and spacious, and the private bathroom attached to the room was great. A few things to note: the walls are a bit thin so you might hear those occupying the other available rooms. This didn’t bother me, but if you are a light sleeper that is something to consider. Also, the bed is a bit firm- again, didn’t bother me, but a foam pad on top could help for stays longer than a few days if you prefer a softer mattress. Overall, I enjoyed my time in the sunflower room. The location alone makes it such a gem! I would definitely stay here again on my next trip to Here.",
            },
            {
              overall: 5,
              spotId: 118,
              userId: 2,
              review:
                "Very cozy, clean and comfortable space. Super easy check-in and check out. Would stay here again!",
            },
            {
              overall: 4,
              spotId: 119,
              userId: 7,
              review:
                "Super clean, comfortable, quiet and easy to get to. Awesome location!  Close to major roads, but we felt like we were away in the forest. Kevin gave us great suggestions as to local dining, as well as activities. Simple, and a nice gem.",
            },
            {
              overall: 4,
              spotId: 120,
              userId: 2,
              review:
                'This is a perfect minimalistic getaway. It has everything you need (including a washer and dryer), and it is in the middle of everything. However, you feel like you\'re tucked away in the woods! Whole Foods, Target, Biltmore Forest, and Downtown are all easily accessible. And all appliances and furnishings in the house are full-size and top-notch so you feel very cozy and "at-home". I highly recommend this space!',
            },
            {
              overall: 4,
              spotId: 121,
              userId: 10,
              review:
                "Kevin’s place was more than we expected! His directions on how to find it were spot on. The place was uniquely decorated, it had an artsy and personal touch to it that was great. Very clean, supplied with all we needed (added toiletries). It was close enough to downtown to Uber but also tucked back in its own little area so it’s quiet and the scenery is nice. It definitely felt like a home away from home. We loved it so much we stayed an additional night past what we had planned and Kevin was great getting that scheduled for us. We will most definitely be back with hopes to stay at Kevin’s place again!",
            },
            {
              overall: 3,
              spotId: 122,
              userId: 2,
              review:
                "Kevin's place is in a great location near Biltmore village.  In a relatively quiet neighborhood. I stayed during independence day, which tends to be a pretty rowdy time but things were nice and calm. His home is stocked with great amenities for your use. I would say good value and definitely recommend.",
            },
            {
              overall: 4,
              spotId: 123,
              userId: 2,
              review:
                "Mike was great. Whenever I needed anything he was there at a drop of a hat. Place is cool, Newley done bathroom and cool setup. In the Forrest feel, but a stones throw from all the action.",
            },
            {
              overall: 4,
              spotId: 124,
              userId: 3,
              review: "Nice place, clean, would stay again",
            },
            {
              overall: 3,
              spotId: 125,
              userId: 2,
              review:
                "Awesome space, very quiet, but close to town. We thoroughly enjoyed our stay.",
            },
            {
              overall: 5,
              spotId: 126,
              userId: 5,
              review:
                "Great communications in a to-die for location.  Quiet neighborhood and really close to Biltmore Village, which is perfect for your first day in Here before you head downtown or to the Biltmore Estate!  Very clean and exactly as advertised!",
            },
            {
              overall: 3,
              spotId: 127,
              userId: 5,
              review:
                "This great home is in a quiet neighborhood, with a separate access and private view to the woods.   The studio apartment type set up was perfect for my stay and was super clean and stylish.  This host was very responsive to this weary traveler.  Great tips for local eats too!",
            },
            {
              overall: 5,
              spotId: 128,
              userId: 9,
              review:
                "This place was way bigger than expected and super clean. Would definitely stay here again!",
            },
            {
              overall: 3,
              spotId: 129,
              userId: 3,
              review:
                "Kevin treated me like family during my entire stay.  I just relocated to the city and chose to stay here instead of a hotel hoping to have a more comfortable space.  Kevin reached out to check on me and was quick to respond with anything I inquired about.  If every host was like Kevin I would never stay in a hotel again.",
            },
            {
              overall: 4,
              spotId: 130,
              userId: 4,
              review:
                "This is a great place to stay! The location is very convenient as it is close to pretty much everything. The area is also nice and quiet. The place comes with everything as promise.",
            },
            {
              overall: 4,
              spotId: 131,
              userId: 3,
              review:
                "Kevin is an exceptional host- he made me feel so welcome and cared for in the mountains during my stay here.  Apartment is stylish and clean, all in a great location.  Very happy and would recommend to anyone!",
            },
            {
              overall: 5,
              spotId: 132,
              userId: 2,
              review:
                "I was lucky enough to spend a month at this place and it really went beyon my expectation Kevin was always super reactive over the AirBnb App and the location is just awesome! 2min away from great breweries and Moe’s Original BBQ + super close to Biltmore Castle too. And with great views to a little forest!",
            },
            {
              overall: 5,
              spotId: 133,
              userId: 3,
              review:
                "Nice camping ground and great for last minute booking, also can’t beat the price. We’re explorers, so camping outside is what we’re used to. Wake up to the sound of chickens, horses, birds, roosters, and so much more. Absolutely beautiful.",
            },
            {
              overall: 4,
              spotId: 134,
              userId: 6,
              review:
                "Great camping spot close to downtown basically paid 10 bucks for an uber. Camping spot is a little downhill so definitely have your rain gear ready if the forecast says rain. Bobby and amanda were very responsive to messages. Would camp here again for sure",
            },
            {
              overall: 5,
              spotId: 135,
              userId: 8,
              review: "Great little campground close to downtown.",
            },
            {
              overall: 4,
              spotId: 136,
              userId: 5,
              review:
                "Amanda and Bobby were amazing hosts!  We found this spot last minute and their response-time was so quick. The camping area was much larger than we expected and pretty private too. The area is enclosed by a small forest of trees that makes you feel like you're out of the city - even though we were able to take a quick Lyft ride out to the breweries downtown. HIGHLY RECOMMEND!",
            },
            {
              overall: 3,
              spotId: 137,
              userId: 10,
              review: "Great spot",
            },
            {
              overall: 4,
              spotId: 138,
              userId: 4,
              review:
                "Cancelled reservation around 3:00 of check in day. Never heard from host and no refund was given.",
            },
            {
              overall: 3,
              spotId: 139,
              userId: 2,
              review:
                "I’m really glad I found this place. It was close to downtown and there was a gas station not far from it. Perfect location. It was a little difficult to follow the instructions because we got there at night. The only other problem I ran into was not being able to close the outhouse door. My boyfriend is a light sleeper and complained about the roosters that would coo at like 2/3AM. But that didn’t bother me at all, personally. I had a really good experience there and would stay again.",
            },
            {
              overall: 4,
              spotId: 140,
              userId: 2,
              review:
                "This place was a wonderful little area you'd never know was there. It was private with multiple spots to pitch a tent. There was a firepit with wood provided which was a nice touch.  Great place to hang out for the night. I would point out that there are roosters in the area...many who started their crowing around 2:30AM and just didn't quit for hours. I'm a heavy sleeper so it didn't bother me. For those who are sensitive I'd recommend ear plugs. Otherwise it was peaceful. The lightning bug show was amazing! Great stay!",
            },
            {
              overall: 4,
              spotId: 141,
              userId: 7,
              review:
                "Great little spot close to downtown Here. Perfect for traveling on a budget. I would stay here again.",
            },
            {
              overall: 4,
              spotId: 142,
              userId: 5,
              review: "Rustic campground rustic tucked away at a fair price",
            },
            {
              overall: 3,
              spotId: 143,
              userId: 10,
              review: "Exactly as described and very convenient to Here",
            },
            {
              overall: 5,
              spotId: 144,
              userId: 8,
              review: "Quick and painless, beautiful spot",
            },
            {
              overall: 5,
              spotId: 145,
              userId: 5,
              review: "Super great place - thank you!",
            },
            {
              overall: 5,
              spotId: 146,
              userId: 4,
              review:
                "Perfect for those planning a last minute visit to Here. The campsites are decent size and tucked away where you can barely hear any of the traffic passing nearby. Highly recommend to anyone looking for a nice weekend getaway to the mountains.",
            },
            {
              overall: 5,
              spotId: 147,
              userId: 7,
              review:
                "camping was great, last minute road trip, was a great way to stay close and save some money. directions were clear and thorough and the farm ambiance was delightful, no better way to experience the North Carolina mountains. hosts were very quick and helpful with responses.",
            },
            {
              overall: 4,
              spotId: 148,
              userId: 5,
              review:
                "This campsite is wonderful because it was private and is centrally located in Here. There are about 4 or 5 sites, a nice outhouse, and sink for water.  Lots of nice touches around, including the enchanting short walk down to the site.  The fire ring is a communal one, although we were the only campers there.  You do have to walk a short distance from your car and there is no shower.  Firewood was stocked, and there are 2 picnic tables and a table with  chairs. Quite nice.",
            },
            {
              overall: 3,
              spotId: 149,
              userId: 4,
              review: "Very close to Here.",
            },
            {
              overall: 3,
              spotId: 150,
              userId: 2,
              review:
                "Camping ground is exactly as described in the listing - a country experience in just a few minutes outside of town. Perfect if you are looking to tent camp and still be super close to downtown Here. Amanda gave great directions and was a super quick communicator. We also appreciated the little extra rustic touches throughout the campground.",
            },
            {
              overall: 4,
              spotId: 151,
              userId: 6,
              review:
                "Thanks for letting us punch a tent in the yard! It was a super convenient location, we enjoyed our camping experience !",
            },
            {
              overall: 3,
              spotId: 152,
              userId: 6,
              review:
                "The place was exactly what my friends and I were looking for. Super close to downtown Here (~10 minute drive), great value, fun spot. Bobby was a really nice host and he and Amanda have done an excellent job setting up their land for easy camping. I highly recommend to anyone who wants to spend a weekend in Here, likes to camp, but also wants easy access to downtown. We will definitely be going back!",
            },
            {
              overall: 5,
              spotId: 153,
              userId: 8,
              review:
                "Great location! And tremendous hospitality. Definitely will stay again!",
            },
            {
              overall: 4,
              spotId: 154,
              userId: 5,
              review: "Lovely!",
            },
            {
              overall: 3,
              spotId: 155,
              userId: 5,
              review:
                "Bobby and Amanda’s was great and the perfect camp spot right outside of Here! If you like camping and want to spend a couple days in Here this is your spot. Getting into town is extremely easy!",
            },
            {
              overall: 4,
              spotId: 156,
              userId: 6,
              review:
                "Bobby and Amanda’s place is in such a convenient location for all Here has to offer! The campground is absolutely adorable. I will definitely be staying here during future Here trips.",
            },
            {
              overall: 3,
              spotId: 157,
              userId: 5,
              review: "Cute little camping huts are available!",
            },
            {
              overall: 5,
              spotId: 158,
              userId: 4,
              review:
                "Great place. It’s a really quaint little campground. This was the closest camping at a good price to downtown Here. There are a couple roosters nearby that might wake you up in the morning pending how sound a sleeper you are.",
            },
            {
              overall: 4,
              spotId: 159,
              userId: 6,
              review:
                'This place is great! I loved everything about it, especially "the chill zone" after dark. I reccomend wearing earplugs if you are a light sleeper due to the neighbor\'s rooster.',
            },
            {
              overall: 3,
              spotId: 160,
              userId: 9,
              review: "Great location, easy green digs.",
            },
            {
              overall: 5,
              spotId: 161,
              userId: 7,
              review:
                "A cute little campsite. Ideal for staying near Here on the cheap. I set up my tent, sleeping bag, and sleeping pad. Thanks !",
            },
            {
              overall: 3,
              spotId: 162,
              userId: 2,
              review: "Great people :)",
            },
            {
              overall: 5,
              spotId: 163,
              userId: 2,
              review:
                "Great spot for what we needed. The solar shower was convenient. We saw 2 wild goats walking around our tent that got our dogs riled up, it was funny. Conveniently close to downtown Here where we spent most of our time.",
            },
            {
              overall: 5,
              spotId: 164,
              userId: 2,
              review:
                "Really cool spot in a great location! Thanks for the experience, we really enjoyed it! :-)))",
            },
            {
              overall: 4,
              spotId: 165,
              userId: 4,
              review: "Really cool place!",
            },
            {
              overall: 3,
              spotId: 166,
              userId: 5,
              review:
                "One of the best options for staying near Here for cheap. Would stay again.",
            },
            {
              overall: 5,
              spotId: 167,
              userId: 6,
              review:
                "incredibly convenient location, everything just as advertised, we enjoyed it!",
            },
            {
              overall: 4,
              spotId: 168,
              userId: 8,
              review:
                "A cheap stay a few minutes off the main road. It gets the job done and I enjoyed the peace and quiet from my tent.",
            },
            {
              overall: 5,
              spotId: 169,
              userId: 4,
              review:
                "Great location in a quiet space close to Here’s downtown. Whimsical, clean, and forestry setting made me enjoy this camp. Campsites are more the group camp style so great for large groups.",
            },
            {
              overall: 5,
              spotId: 170,
              userId: 5,
              review:
                "Baying Hounds Campground was a great experience! The grounds are set up with all basic amenities. A+ on style too! Very unique platforms, clean, nice night lighting, and amazing owners Bobby and Amanda! Highly recommended.",
            },
            {
              overall: 5,
              spotId: 171,
              userId: 2,
              review:
                "Simple and straightforward camping experience! Very convenient to town, would stay again.",
            },
            {
              overall: 5,
              spotId: 172,
              userId: 2,
              review: "Cute and quirky campsite",
            },
            {
              overall: 4,
              spotId: 173,
              userId: 6,
              review: "A unique campground with outdoor shower.",
            },
            {
              overall: 4,
              spotId: 174,
              userId: 7,
              review:
                "Great spot to stay while touring Here! Easy booking and everyone who we met were very friendly!",
            },
            {
              overall: 5,
              spotId: 175,
              userId: 3,
              review:
                "Awesome host. Cool property! The house just below the tent sites had dogs that barked ALL night. Not sure if thats part of the same property or not... Thats the only reason for 4 stars instead of 5.",
            },
            {
              overall: 4,
              spotId: 176,
              userId: 7,
              review:
                "I absolutely loved staying here. Such a funky  little campground. So close to Downtown. Pup friendly. Has a shower (No hot water.) Clean restroom. Fire pit for socializing at night. Good times!",
            },
            {
              overall: 3,
              spotId: 177,
              userId: 9,
              review:
                "Great little camping spot in a convenient location to downtown.",
            },
            {
              overall: 4,
              spotId: 178,
              userId: 2,
              review:
                "This campground is super close to downtown Here and very convenient. Signage is pretty clear and my campsite was very close to where I parked my car. I met some nice folks and enjoyed socializing around the campfire. Glad I chose to stay here on my road trip!",
            },
            {
              overall: 4,
              spotId: 179,
              userId: 6,
              review:
                "Wow!  A perfect location close to downtown, the Athens Yoga Center, Whole Foods, Trader Joes and Harris Teeter, a coffee shop and bakery.  This apartment is sparkling clean and stylishly decorated. The back room with the view of the mountains was perfect to watch the sunrise and sunset.  We watched the Turkey Trot go by from the side deck.  We stayed a week and the supplies of soap, towels was ample.   My husband said he never wants to stay in a hotel again!  Thank you for a great week.",
            },
            {
              overall: 5,
              spotId: 180,
              userId: 6,
              review:
                "Immaculate and stylish apartment conveniently located to restaurants and grocery stores in Here. Stayed two nights and were very pleased.",
            },
            {
              overall: 4,
              spotId: 181,
              userId: 8,
              review:
                "We had a great stay at Annika’s space! Short 10min walk into downtown and close to grocery stores. We cooked a few meals here and all the necessary kitchen utensils were available, which was great! Comfy bed and absolutely stunning view of the mountains! Annika was also quick to respond with a couple questions I had. Would highly recommend!",
            },
            {
              overall: 5,
              spotId: 182,
              userId: 7,
              review:
                "Annika's home is charming, stylish, and perfectly situated for a weekend away in Here. It's surrounded by cool, funky restaurants (like Taco Temple and Gan Shan Station) and an easy 15 minute walk to downtown, plus a quick drive to the River Arts District and the North Carolina Arboretum. Everything about the weekend is as easy as can be – there's tons of convenient parking, the unit is larger than it appears, everything is new and clean – and ready for a good time in Here. I highly recommend!!",
            },
            {
              overall: 5,
              spotId: 183,
              userId: 4,
              review:
                "This apartment is in a perfect location for your visit to Here.  Situated in a quiet neighborhood, but within walking distance to some great neighborhood restaurants and a grocery store to pick up supplies. Short drive to downtown and to the River Arts District. Apartment is nicely decorated and was immaculate, beds were very comfortable, kitchen had all the essentials. Highly recommend!",
            },
            {
              overall: 5,
              spotId: 184,
              userId: 7,
              review:
                "This is a great Airbnb the rooms are clean, the linens and towels are fresh and plenty. I felt like I was at a chic boutique hotel. Everything was extremely thoughtful a soft night light in the hall lights up for the bathroom run in the dark. There’s a washer and dryer in a spacious, clean bathroom with top of the line products. Also the location was perfectly situated. There’s a Whole Foods, Trades Joes, Yoga, Vegan Restaurants and a short walk to the shops downtown. I’m looking forward to staying with Annika again! Thank You so much we love Here and your adorable place.",
            },
            {
              overall: 4,
              spotId: 185,
              userId: 3,
              review:
                "Clean and good location, easy check in! Great for weekend getaway",
            },
            {
              overall: 5,
              spotId: 186,
              userId: 5,
              review:
                "The apartment was sparkling clean, quiet, and private. It's the second floor of a house, above a law office, with a private entrance. It felt more like you were staying at a friend's house with nice amenities. For example, I forget a hairdryer and I found one in the bathroom drawer. Check in was easy and Annika's instructions were excellent. We really appreciated her restaurant recommendations and had a wonderful dinner at Curate!",
            },
            {
              overall: 3,
              spotId: 187,
              userId: 6,
              review:
                "Lovely home in quiet residential area. Beautifully maintained. Everything was immaculate. Located in nice area in Here with both Trader Joe’s and Whole Foods within 5 minute walk. Annika was very responsive and helpful with suggestions about restaurants and things to do. Easy access to Biltmore Estate.",
            },
            {
              overall: 3,
              spotId: 188,
              userId: 7,
              review:
                "Great location and a wonderful host. My family with children stayed for almost 3 weeks and it was perfect.",
            },
            {
              overall: 5,
              spotId: 189,
              userId: 5,
              review:
                "Karl was a wonderful host and his place was stylish and clean! We were so pleased to be the first guests at this place. There were some AC issues, which I was concerned about at first. However, the place is surrounded by beautiful trees and it was absolutely not an issue. He has put in so much work and you can see how much he cares about the comfort and happiness of his guests. We absolutely loved the screened porch, and the comfy yellow coach. It isn’t too far from Biltmore or Downtown Here. It was a wonderful home base.",
            },
            {
              overall: 5,
              spotId: 190,
              userId: 7,
              review: "Charming home, the screened in porch was very relaxing.",
            },
            {
              overall: 4,
              spotId: 191,
              userId: 5,
              review:
                "This house is so beautiful and comfortable, and very close to the Great Smoky Mountain National Park. We had a very nice living here. Karl is so kind to every visitor and always reminders us some risks in terms of our kids. Karl even peovides us a lot of foods and coffee for free, which is very cozy and helpful for traverllers like us. We would certainly choose this house again, and we strongly suggest you to live here for excellent experience.",
            },
            {
              overall: 4,
              spotId: 192,
              userId: 5,
              review:
                "very quaint place just outside of Here. Stylish house and a very welcoming host. great communication and local tips. Would definitely recommend.",
            },
            {
              overall: 4,
              spotId: 193,
              userId: 8,
              review:
                "Karl was really prompt helpful, and kind in his communications with us and resolving any questions that we had. His place was a great stay for our family over Thanksgiving, with everything we needed to enjoy some time away together.",
            },
            {
              overall: 3,
              spotId: 194,
              userId: 5,
              review: "Great location and really nice space",
            },
            {
              overall: 3,
              spotId: 195,
              userId: 10,
              review:
                "Everything was clean, organized and Karl was very precise and kind. Would definitely recommend or stay again",
            },
            {
              overall: 3,
              spotId: 196,
              userId: 10,
              review:
                "Karl's place in Arden was a great home base for us while we explored the area during the winter holidays. Karl was an exceptional communicator and extremely responsive. He did everything to make our stay wonderful! The home was clean, comfortable and in a great location with easy access to Here, Hendersonville, and the surrounding area. The house had everything we needed, with room for our extended family of six to be comfortable. We especially enjoyed all the creative artwork in the home as it added personality and a special touch. Thanks for the hospitality.",
            },
            {
              overall: 4,
              spotId: 197,
              userId: 5,
              review:
                "Very nicely decorated in retro 60s style, clean freshly renovated, great host only about 20 minutes from Biltmore, downtown, close to the airport.  Great for our family of 6.  Will stay again.",
            },
            {
              overall: 3,
              spotId: 198,
              userId: 7,
              review:
                "Karl was very responsive, forthright, and proud of his property! It's a sweet house and the eclectic and retro styling is lots of fun. At the time of our visit, though, the place needed some maintenance, with burned-out bulbs, a nonfunctional main light in the kitchen, torn porch screen door, and the like. These shouldn't be hard to fix but  would make the place feel fully up to airbnb standards. cared for. Also be aware that the fireplace is only gas -- doesn't burn wood.",
            },
            {
              overall: 5,
              spotId: 199,
              userId: 4,
              review:
                "Karl was a great host with a beautiful space! It was extremely easy and convenient to everything we needed and to the highway.  Will likely use this location again!",
            },
            {
              overall: 4,
              spotId: 200,
              userId: 3,
              review:
                "Great spot with a Museum quality collection of inspiring modern art. Had the TV waiting for us with good music, selection of teas and a plethora of comfortable lounging areas. killer house Karl thank you!!",
            },
            {
              overall: 3,
              spotId: 201,
              userId: 10,
              review:
                "Clean and spacious. We were a family of 6 needing a place close to the airport. We got very comfortably and the drive to the airport was only about 10-minutes. Karl communicated well and the check-in process was easy. Would stay again.",
            },
            {
              overall: 5,
              spotId: 202,
              userId: 2,
              review:
                "We were scrambling to find a last minute Airbnb b/c of a cancellation. We felt very blessed to secure an amazing place with a wonderful host.  The place was better than we expected and all 5 of us thought we couldn’t have found a more perfect spot to meet up & celebrate our granddaughters birthday & graduation from high school.  Don’t hesitate to book this one!",
            },
            {
              overall: 5,
              spotId: 203,
              userId: 10,
              review: "Good place to stay",
            },
            {
              overall: 5,
              spotId: 204,
              userId: 4,
              review:
                "We booked this listing for a short work conference to save money on accommodations for four people. The house was spacious, well furnished, and there were no issues. It does take about 20 minutes to get into downtown Here, so plan accordingly.",
            },
            {
              overall: 4,
              spotId: 205,
              userId: 8,
              review:
                "We stayed here before a running race that started at Highland Brewing. It's not a long drive from Highland. Great space. Very comfortable and clean. Bed was super comfy. Three bedrooms and plenty of other space. Very quiet neighborhood. We would stay here again.",
            },
            {
              overall: 4,
              spotId: 206,
              userId: 10,
              review:
                "Karl, provided us a special place for the 5 of us. The interiors were awesome!",
            },
            {
              overall: 4,
              spotId: 207,
              userId: 5,
              review:
                "Karl is a great host and the space is very well decorated with a great screen porch.  Excellent for Here get-aways.",
            },
            {
              overall: 4,
              spotId: 208,
              userId: 4,
              review:
                "Great place and perfect decor. Felt right at home and loved every minute. There was room for everyone!",
            },
            {
              overall: 5,
              spotId: 209,
              userId: 9,
              review:
                "Lots of fun in this eclectic home! Plenty of space for several couples and great common area!",
            },
            {
              overall: 4,
              spotId: 210,
              userId: 6,
              review:
                "Great location, excellent hospitality, and unique shabby chic vibe! We would definitely go back.",
            },
            {
              overall: 4,
              spotId: 211,
              userId: 8,
              review:
                "We enjoyed our stay! Karl's place is spacious and has two bathrooms which makes it especially nice for a big family or group. We found it to be very comfortable even without air conditioning, except that the bedrooms without window fans got a bit warm at night time. He had one oscillating fan in the house and we brought a couple of our own just to be extra comfortable. The location of the house was woodsy and private, very pretty, and an easy 20 minute drive to downtown Here. I would recommend Karl's place to anyone looking for a space with room for a big group!",
            },
            {
              overall: 4,
              spotId: 212,
              userId: 9,
              review:
                "This is a nice place to get away, but still be close to amenities. Better for a family that does not have smaller children.",
            },
            {
              overall: 3,
              spotId: 213,
              userId: 2,
              review: "Cool artistic space, lots of sleeping options",
            },
            {
              overall: 5,
              spotId: 214,
              userId: 5,
              review:
                "We had a great time staying at Karl's place. It was close to do many wonderful things and there was plenty of room. The beds we're really comfortable and the kids loved getting to sleep on the screened in porch.",
            },
            {
              overall: 5,
              spotId: 1,
              userId: 2,
              review:
                "Karl’s place is really nice and comfortable. The location is perfect, really close to downtown Here. There are quite a lot of restaurants nearby. The house was clean and had everything we needed. Loved the decor",
            },
            {
              overall: 4,
              spotId: 2,
              userId: 3,
              review:
                "I highly recommend staying at Karl's place. The wooded surroundings, screened in porch, front patio area, decor & furnishings all make it very welcoming space to gather and share with friends.",
            },
            {
              overall: 4,
              spotId: 3,
              userId: 7,
              review:
                "Karl’s groovy rental was fantastic! Very chill vibe, awesome decor and super clean. Loved it!",
            },
            {
              overall: 3,
              spotId: 4,
              userId: 6,
              review:
                "Cozy little ranch nestled off the beaten path in a forest of ivy and rhododendrons. Super clean and easy with lots of charm. Close to everything, but also just far enough away. Perfect really, and I’ll totally be back.",
            },
            {
              overall: 3,
              spotId: 5,
              userId: 7,
              review:
                "A place in the woods.  Quiet and private.  Decor is a throwback to the 70's.  Very clean.",
            },
            {
              overall: 3,
              spotId: 6,
              userId: 2,
              review: "Awesome Space! Loved the porch!",
            },
            {
              overall: 4,
              spotId: 7,
              userId: 6,
              review: "The house was enjoyable for our short 2 night stay.",
            },
            {
              overall: 3,
              spotId: 8,
              userId: 5,
              review:
                "Great place to stay! Conveniently close to Here while still peacefully private. Karl was very welcoming and a great host. The house was extremely charming and inviting. It's very easy to relax and feel at home. Even with a large group, it's spacious and comfortable. The only thing I regret is not staying longer. Karl's place was perfect, I can't think of a better place to have stayed!",
            },
            {
              overall: 4,
              spotId: 9,
              userId: 6,
              review:
                "Karl is a great host and was quick to respond to my messages. Beautiful home & very well furnished. It was a great place to get away! I highly recommend staying at Karl’s place.",
            },
            {
              overall: 5,
              spotId: 10,
              userId: 2,
              review:
                "First time staying at an AirBNB and was nervous but pleasantly surprised. Karl’s place is super clean, private, and the decor was super cute too. Recommend 100%.",
            },
            {
              overall: 5,
              spotId: 11,
              userId: 7,
              review:
                "Karl is very kind and welcoming to six of us. The neighborhood is quiet and beautiful. It is best suitable for a big family to stay, which will be a lot of fun.",
            },
            {
              overall: 3,
              spotId: 12,
              userId: 3,
              review:
                "Super fun space.  Funky decor in a nice setting.  Private,  wooded lot.  We really enjoyed it.",
            },
            {
              overall: 4,
              spotId: 13,
              userId: 9,
              review: "Beautiful home and great location!",
            },
            {
              overall: 4,
              spotId: 14,
              userId: 7,
              review:
                "Great location, show up during daylight hours to if you canbeautiful place , you will want to figure out the lay of the land",
            },
            {
              overall: 3,
              spotId: 15,
              userId: 5,
              review: "great staging area for visiting Here",
            },
            {
              overall: 4,
              spotId: 16,
              userId: 2,
              review:
                "Karl was an excellent communicator. The house was clean, had a bohemian/hippy vibe, and 3 nice sized bedrooms. My only suggestion is blinds on the bedroom windows instead of the thin curtains. My husband is light sensitive when he sleeps.",
            },
            {
              overall: 3,
              spotId: 17,
              userId: 3,
              review:
                "Karl's place exceeded our expectations! It's very spacious and the decor is mid century/bohemian sheek. There are thoughtful touches and beautiful artwork through out the space. The place was clean and bed super comfy. Karl was very accommodating with our travels plans. He was quick to respond and even went out of his way to get an outdoor firepit for us to use! The outdoor yard is very relaxing and big, with a beautiful creek in the back yard. It's  about a 15-20 min ride to downtown Here. We liked being at his place so much, on our second day we stayed in most of the day. We have stayed at Airbnbs all over Here and in other states. This is by far our favorite and we look forward to another visit soon!",
            },
            {
              overall: 3,
              spotId: 18,
              userId: 2,
              review: "Amazing. Definitely coming back!",
            },
            {
              overall: 5,
              spotId: 19,
              userId: 4,
              review:
                "Very cute place. Pictures are accurate and host responded quickly",
            },
            {
              overall: 5,
              spotId: 20,
              userId: 2,
              review:
                "Kitchen essentials not adequate if you plan to stay longer than a weekend and cook meals in the house, will need to bring your own cooking sheets, utensils, there were no dishcloths, washcloths or even a starter roll of paper towels. There was an issue with the heat, the house felt like it was 85 degrees and only cooled down after we turned the heat off but maybe that was just from not being used over the winter.  The living room furniture is not for lounging - there is no where to just lay around and watch a movie or TV if you wanted to do that. House was kitschy and cute, very eclectic.",
            },
            {
              overall: 3,
              spotId: 21,
              userId: 3,
              review:
                "The experience was like dealing with a bad car salesman. He double booked us after we changed our plans to accommodate HIS request, then tried to rent us a one bedroom place for 4 people at a higher rate. He was incredibly rude and made everything seem to be based on our ignorance. I travel on a very regular basis and stay at AirBnB’s as a regular preference and this by far was the worst. Hardly any kitchen tools, the hot tub wouldn’t stay hot, and the maid was lingering regularly. I felt watched. It was entirely too high for what it seemed to be. It is in a neighborhood and though a very beautiful setting I felt like what we saw would be more rural. Overall, I found him rude, ostentatious, non accommodating, and my trip was cut short with less than 24 hour notice. Basically, I drove from KY for half a vacation. Avoid this place.",
            },
            {
              overall: 5,
              spotId: 22,
              userId: 5,
              review:
                "This Airbnb is so nice I didn’t even want to leave to go see all the cool stuff I came to the mountains to see. The screened in porch area is absolutely beautiful and the so peaceful",
            },
            {
              overall: 5,
              spotId: 23,
              userId: 3,
              review:
                "This is a very nice place tucked away in the trees.. The screened in porch view was stunning with the sounds of nature all around. Would definitely recommend and we will be back!",
            },
            {
              overall: 4,
              spotId: 24,
              userId: 9,
              review:
                "This was a fantastic midway location on our drive from the Midwest to Florida. We spent all of our time in the lovely screened-in porch as well as the very clean hot tub. We will definitely book again when we do the same trip next year. Thanks so much!",
            },
            {
              overall: 5,
              spotId: 25,
              userId: 9,
              review:
                'Karl & His beautiful home was just simply amazing & exactly what my family & I was looking for and more! My daughters (Ages 3 & 1) had the absolute best time! The Hot Tub was amazing! There are so many favorite features I have about this home... it was also super clean!  I will definitely be coming back. My Fiancé and I both agreed that this would be our new "get away spot" Thanks Karl!',
            },
            {
              overall: 5,
              spotId: 26,
              userId: 8,
              review:
                "A pragmatic review:  House in a quiet neighborhood tucked away from the main street under a canopy of trees.  Mostly private but it is not complete isolated.  There is no A/C; however, it was still cool inside despite summer temperatures.  All the rooms were nice/cute and super duper clean.  The kitchen had the essentials.  The hot tub is great for two people. The pictures convey a polished interior, but up close it is just okay.  Excellent value for larger groups.",
            },
            {
              overall: 3,
              spotId: 27,
              userId: 7,
              review:
                "A great place to kick back after a night in Here, or a day spent in the mountains.The host seems to care a lot about guest safety.Things we wish we’d known before staying: the hot-tub is only for two people, and you will he asked to take your shoes off at the door. There were minor issues with the last cleaners on our stay, but nothing I’m sure can’t be resolved.",
            },
            {
              overall: 5,
              spotId: 28,
              userId: 9,
              review:
                "Karl's place was great! Plenty of space, many amenities, and a nice place to relax after a long day hiking!",
            },
            {
              overall: 4,
              spotId: 29,
              userId: 3,
              review: "Very unique space - great stay !",
            },
            {
              overall: 5,
              spotId: 30,
              userId: 6,
              review: "Great place to stay and relax!  We loved it!",
            },
            {
              overall: 4,
              spotId: 31,
              userId: 5,
              review:
                "Loved the views, the sleeping porch, the hot tub and the location!",
            },
            {
              overall: 3,
              spotId: 32,
              userId: 10,
              review:
                "We had a great visit at Karl's. My brother and family (5 in total) stayed here very comfortably, plus there was plenty of room for my mother and I to join them for a meal/visit. The location was near the airport, perfectly situated between Hendersonville and Here with a great coffee shop around the corner.  Fireplace was a nice addition in the evenings. Karl was great with responding to any of our questions.  Definitely will recommend to any of my friends visiting the area.",
            },
            {
              overall: 5,
              spotId: 33,
              userId: 10,
              review:
                "Arden is very close to biltmore park, and Hendersonville wineries; perfect place for friends to stay. The house was so stylish, had coffee makers and a lovely view of the woods.",
            },
            {
              overall: 5,
              spotId: 34,
              userId: 7,
              review:
                "Close to Here.  Quiet neighborhood in the woods. Zen like atmosphere.",
            },
            {
              overall: 3,
              spotId: 35,
              userId: 7,
              review:
                "We stayed at this location during Thanksgiving and it was a great setting to be with family. The house is well equipped with amenities. The place was clean when we arrived and looked similar to the pictures posted. It was relaxing to connect with family having coffee,  hanging out the screen porch and even watching netflix in the morning.  The place has lots of interesting decor with unique artwork on the walls and exclusive furniture pieces. My favorite was the colonial lounge chair. We will definitely be returning to this house during the summer.",
            },
            {
              overall: 4,
              spotId: 36,
              userId: 8,
              review:
                "Karl’s place is perfect! The pictures do this place no justice... This has all the cool vibes that match the Here area of a cute mountain town! We were able to cook meals while we were there during Christmas. Afterwards we hoped in the hot tub and enjoy a warm soak after a long travel! I’m a huge tea drinker so the eclectic tea kettle was a nice surprise! Don’t miss the chance to stay here! We will be back!",
            },
            {
              overall: 3,
              spotId: 37,
              userId: 6,
              review:
                "Drew and Caroline have gone out of their way to make this Here space the perfect home away from home.  The place was spotless and fully exceeded our expectations.  You can tell that a lot of thought went into the set-up of this home!  The location was extremely convenient for everything we wanted to explore while in AVL - hiking, biking, food and breweries all close by.  The hosts are very knowledgeable about the local area and gave GREAT recommendations.  We plan on staying here every time our travels bring us to the area.  Book early - a place this nice will book up fast!",
            },
            {
              overall: 3,
              spotId: 38,
              userId: 8,
              review:
                "GREAT place!  Caroline and Drew are excellent hosts!  Quick to respond and very thoughtful.  I was going to arrive late and during a heavy rain, and Caroline checked on me to make sure I was okay and made sure the lights were on for my arrival.  The place is spacious, beautifully decorated, comfortable and very conveniently located.  I am hoping to stay there again in the future!",
            },
            {
              overall: 5,
              spotId: 39,
              userId: 9,
              review:
                "This is by far the most comfortable, well-appointed, fresh, bright, and welcoming Air BnB rental, or (Hidden by Airbnb) vacation rental, that we ever have stayed in.",
            },
            {
              overall: 3,
              spotId: 40,
              userId: 3,
              review:
                "Drew and Caroline’s place was so sweet I think I got a cavity. We loved this private and homey little space. It felt like our apartment where we could come and go with no worries! We even checked out getting lost in the town and they were so accommodating! Definitely recommend this stay!",
            },
            {
              overall: 3,
              spotId: 41,
              userId: 9,
              review:
                "Drew and Caroline’s place is exactly what you should expect when staying AirBnB. Not only was the place super neat and hip, but it was so convenient to everything my wife and I wanted to do. The small touches they put into their place made it feel like home. Although this is a private place below their home with separate access and your own parking area, you would have never known you had people living above you with the exception of a few footsteps, which seemed few and far between. Drew and Caroline seemed very nice and accommodating, but the way they set up their place, you really didn’t need them. They pretty much give you everything you need. Not only was the inside beautiful and relaxing but they also live in a super safe place that you could feel safe walking alone at night. Suburban America is what I would call it. This will be a must stay when my wife and I are in Here again.",
            },
            {
              overall: 3,
              spotId: 42,
              userId: 5,
              review:
                "We had such much fun celebrating our 10 Year Anniversary in Here. We were sad to leave Drew and Caroline’s precious space. Everything was perfect. The space was so clean and all the extra little touches were special. We felt so comfortable. We can’t wait to stay here again in the future. We highly recommend!",
            },
            {
              overall: 5,
              spotId: 43,
              userId: 3,
              review:
                "I would recommend Drew and Caroline’s place to anyone traveling to Here. Their space is so cute!! They have taken the time to make sure you would have everything you would possibly need. They are very thoughtful and considerate hosts. If we ever travel through again, I will definitely look into staying with them again.",
            },
            {
              overall: 5,
              spotId: 44,
              userId: 9,
              review: "Cute place, great location",
            },
            {
              overall: 3,
              spotId: 45,
              userId: 8,
              review:
                "Had to take out trash and wash the linens and towels after paying a fee for cleaning",
            },
            {
              overall: 5,
              spotId: 46,
              userId: 4,
              review:
                "We enjoyed our stay at the Sweet Suite!  It was a cozy home away from home!",
            },
            {
              overall: 5,
              spotId: 47,
              userId: 6,
              review:
                "My wife and I had an amazing visit!  We spent more time in the suite than we anticipated because of the great energy that the décor and ambiance provided.  Drew and Caroline also provided great tips on sites and restaurants to visit which were fantastic.  Definitely will return!",
            },
            {
              overall: 4,
              spotId: 48,
              userId: 8,
              review:
                "very nice room to overnight, great neighborhood, helpful hosts.",
            },
            {
              overall: 5,
              spotId: 49,
              userId: 7,
              review:
                "Plenty of room to move around and enjoy.   No stairs making it very easy to come and go. Apartment has it's own driveway.  Able to park right outside  of the  door.    Had some difficulty  turning the sofa into a bed but host was quick to help out.   Fresh fruit and a few snacks were provided along with coffee and hot teas.    We enjoyed the stay.",
            },
            {
              overall: 3,
              spotId: 50,
              userId: 7,
              review:
                "It's everything you could want for a vacation. Small and homey with little personal touches, this is the perfect spot to stay in for a place like Here. It's a little away from downtown, about 20 minutes, but completely worthwhile. You're less than 10 minutes from the Blue Ridge Parkway entrance and ready to hit those magnificent trails. Drew and Caroline were very accommodating and quick in their responses to our questions. Anytime I'm back in Here, I will gladly come and stay with them again.",
            },
            {
              overall: 4,
              spotId: 51,
              userId: 3,
              review:
                "Caroline was an amazing host with quick responses to all of our questions and even gave us a list of attractions im the area. The space was clean and stylish and we will be returning!",
            },
            {
              overall: 4,
              spotId: 52,
              userId: 3,
              review:
                "Great apartment. Very clean and exactly as it looks in pictures if not better. Extras like tons of towels and fresh fruit made this extra nice! Location is 15-20 minutes to most Here sights. Close to restaurants, gas,grocery stores. The bed is very soft so if you like something firmer the futon had a thick firm mattress on it so might want to test both out depending on your preferences. Easy check in and check out. Enjoyed our stay!",
            },
            {
              overall: 4,
              spotId: 53,
              userId: 4,
              review:
                "Drew and Caroline's suite was perfect. It was so cute! Very cozy, comfortable, and all around great. They had everything you could possibly think of (even a box full of chargers and music speakers!) All around a wonderful place to stay and I will definitely stay there again next time I travel to Here.",
            },
            {
              overall: 4,
              spotId: 54,
              userId: 5,
              review:
                "Drew and Caroline were easy to work with and their suite was perfect for our quick trip to Here.",
            },
            {
              overall: 3,
              spotId: 55,
              userId: 5,
              review:
                "This place is very special.  Hosts Drew and Caroline have thought of everything.  Private and convenient to everything.",
            },
            {
              overall: 4,
              spotId: 56,
              userId: 9,
              review:
                "Our 1st time using air bnb was at Caroline & Drew's house, and it was an awesome 1st experience!  If you're looking for a warm & inviting place to stay in a great location in Here...this is your place!  Awesome hospitality and a quaint little space that met all of our needs for our stay...even with a group of 4!  This was a celebration trip for my parents 50th wedding anniversary, and they loved our stay!!",
            },
            {
              overall: 5,
              spotId: 57,
              userId: 7,
              review:
                "This is a charming getaway about 15 minutes from downtown Here, and there are plenty of places to eat and to explore much closer. The suite is spacious and includes much more than you need for a cozy stay. The hosts have even graciously provided outdoor gear should you need it. While it is part of a larger house, the family is totally respectful of guests’ privacy. Cannot recommend enough!",
            },
            {
              overall: 5,
              spotId: 58,
              userId: 5,
              review: "Comfy Stay! Good Privacy!",
            },
            {
              overall: 3,
              spotId: 59,
              userId: 9,
              review: "It was great and they were very hospitable.",
            },
            {
              overall: 3,
              spotId: 60,
              userId: 8,
              review:
                "Drew and Caroline's BnB is adorable in every way. Checking in and out was easy. It's in a great neighborhood and location for Here. Very clean and cozy.",
            },
            {
              overall: 5,
              spotId: 61,
              userId: 3,
              review:
                "Our stay at the sweet suite was very nice. They communicated very well and kept us informed. Check in was easy and it was very clean.",
            },
            {
              overall: 5,
              spotId: 62,
              userId: 3,
              review:
                "Drew and Caroline and their entire family, including the two dogs, were very sweet! We enjoyed our stay!",
            },
            {
              overall: 3,
              spotId: 63,
              userId: 4,
              review:
                "I have stayed at many Airbnbs, yours was one of the best. It was such a joy to be your guests! I loved the selection of games that were available for us to choose from, as well as the yummy treats.  Most of all having the blankets to cuddle up with while watching tv/reading were perfect ! Thank you again ! Peace, Robin",
            },
            {
              overall: 3,
              spotId: 64,
              userId: 6,
              review:
                "This a fantastic place to stay that is extremely close to downtown Here! The neighborhood is quiet, Drew and Caroline have made their Sweet Suite a private and wonderful place to stay. They added thoughtful touches throughout your suite as well as everything you could possibly need during your stay!",
            },
            {
              overall: 4,
              spotId: 65,
              userId: 3,
              review:
                "Caroline and Drew were incredibly accommodating, and their space was so nice to be able to stay in. Easy/close access to a bunch of food options, parks, the Biltmore, and you even have your own personal driveway to get in and out of without bothering anyone. Highly recommended.",
            },
            {
              overall: 5,
              spotId: 66,
              userId: 9,
              review:
                "The place was very clean and well laid out. Everything was just as expected, but there were nice little touches like board games and fresh cut flowers next to the bed. Would definitely recommend!",
            },
            {
              overall: 3,
              spotId: 67,
              userId: 4,
              review:
                "Drew and Caroline’s Sweet Suite is a very pleasant, comfortable, thoughtfully appointed Airbnb. If you are planning a trip to Here, NC choose the Sweet Suite, you won’t be disappointed.",
            },
            {
              overall: 5,
              spotId: 68,
              userId: 7,
              review:
                "A charming place to stay in the Here area -- really convenient to Biltmore which was reason we were there -- helpful hints from hosts (we ate donuts at Vortex and really enjoyed it) --",
            },
            {
              overall: 5,
              spotId: 69,
              userId: 10,
              review:
                "This is a very good place to stay in Here. We recommend it for visiting in and around Here.",
            },
            {
              overall: 4,
              spotId: 70,
              userId: 3,
              review:
                "Drew and Caroline are amazing hosts that focus on the little details to make your stay comfortable. The space is so well kept and stylish with all the amenities a traveler could ask for. Definitely the best Airbnb I have seen thus far!!",
            },
            {
              overall: 4,
              spotId: 71,
              userId: 7,
              review:
                "Cute, quaint and quiet place to stay if you're visiting Here.  Very clean and thoughtful touches throughout the apartment.  Within 15 minutes of good shopping and dining.  Thank you Drew and Caroline.",
            },
            {
              overall: 4,
              spotId: 72,
              userId: 7,
              review:
                "I highly recommend this place for your stay in Here!! It is sparkling clean, modern, adorable & conveniently located to Biltmore Estate & many other attractions. The hosts have coffee, tea & other treats available for you. Even fresh flowers on the nightstand! Lovely place to stay!!!! :)",
            },
            {
              overall: 3,
              spotId: 73,
              userId: 2,
              review:
                "Such a cozy and beautiful space!! Drew and Caroline are awesome and would totally recommend!",
            },
            {
              overall: 4,
              spotId: 74,
              userId: 4,
              review:
                "Adorable, immaculate and with lots of special touches.  Great location.  Hope to come again!",
            },
            {
              overall: 3,
              spotId: 75,
              userId: 5,
              review:
                "The Sweet Suite is a dream! It is exactly as described, but actually MUCH bigger than I anticipated! I stayed there by myself, but I think you could easily fit up to four people in the amount of space. There is a full kitchen, dining room, living room and a large bedroom, as well as a bathroom. The space is organized in a way that really maximizes the square footage and gives you the feel of an apartment instead of a small suite. It was perfect. Drew and Caroline provided small touches that go a long way - fruit and granola bars, an assortment of teas and coffees for a Keurig, and some mints and candy. I have stayed in a few different Airbnbs in Here, and this is my favorite one.  I will be back!",
            },
            {
              overall: 4,
              spotId: 76,
              userId: 2,
              review:
                "Caroline & Drew were excellent hosts. The sweet suite was an absolutely fantastic place to stay. A comfortable, peaceful, and immaculate suite. Wish my husband & I could've stayed here longer.  We highly recommend this place!",
            },
            {
              overall: 4,
              spotId: 77,
              userId: 6,
              review:
                "Listen y’all I don’t even have words to describe. I have only Airbnb’d for a year but I’ve stayed in beautiful hotels everywhere I go. I’m an elite Marriott member, but have been trying more Airbnbs as time goes on. This by far is the most beautiful Airbnb we’ve ever stayed in! $68 a night is an incredible deal for what you are getting. You can comfortably put 4 people in the apartment. You have an entire kitchen and a beautiful bathroom and living area outside of the bedroom. The place is clean, it has a washer and dryer, a coffee machine and some snacks to keep you going! If the apartment part wasn’t enough, Drew and Caroline are honest to God two of the nicest people you will EVER come across. They are so incredibly accommodating! They answer any and all questions you have through your stay. We had a car accident on our first day and the car was in the shop our entire time. They offered to drive us to the grocery store or drop us into town if we needed it. Then unexpectedly the car was not finished in time for us to leave, we had to extend our stay and they were extremely accommodating to this unexpected circumstance. We will 100% be coming back to Here JUST to stay in this beautiful apartment that felt like home! Drew and Caroline THANK YOU SO MUCH!",
            },
            {
              overall: 5,
              spotId: 78,
              userId: 3,
              review:
                "This is a great property to stay in. I travel a lot and this was a great location and Caroline was very helpful. The property itself was very clean.",
            },
            {
              overall: 4,
              spotId: 79,
              userId: 7,
              review:
                "One of the best spaces we have ever stayed! Loved the decor and location - would definitely recommend to others and would stay again next time we visit Here.",
            },
            {
              overall: 3,
              spotId: 80,
              userId: 8,
              review:
                'The "Sweet Suite" was so cute, so cozy and so clean!  Was in a beautiful location surrounded by the beauty of the amazing natural wonders of WNC!',
            },
            {
              overall: 3,
              spotId: 81,
              userId: 4,
              review:
                "Great place to stay! Drew and Caroline were very responsive and helpful and the space was very nice! I would definitely stay here again and recommend it to a friend looking for a place in Here.",
            },
            {
              overall: 5,
              spotId: 82,
              userId: 4,
              review:
                "This was my first time using Airbnb and had no clue what to expect.  Before arrival communication was very smooth and simple.  When arriving at the house the inside was beautifully decorated inside and the separate entrance was a nice feature as well.  Would definitely reccomend this stay for anyone in the area.",
            },
            {
              overall: 3,
              spotId: 83,
              userId: 10,
              review:
                "Beautiful and comfy place! I really enjoyed the space and how peaceful it was.",
            },
            {
              overall: 5,
              spotId: 84,
              userId: 9,
              review:
                "This AirBNB is perfect for an Here getaway! We thought it was very cute and homey - all the small touches added up to make a big difference. The bed was great for two and the fold out couch could likely fit just one small person. It's a fold out, so it wasn't as comfy as the bed naturally, but still good if you need the option. Caroline and Drew were great hosts - they gave awesome recommendations and were willing to meet in person with us if we wanted to meet them. Would definitely recommend to anyone and would absolutely stay again!",
            },
            {
              overall: 5,
              spotId: 85,
              userId: 10,
              review:
                "Very well kept and thoughtful home and decor, you shall enjoy it.",
            },
            {
              overall: 5,
              spotId: 86,
              userId: 2,
              review:
                "The home was lovely.  The only comment is that the futon was uncomfortable to sleep on",
            },
            {
              overall: 3,
              spotId: 87,
              userId: 3,
              review:
                "Lovely suite with thoughtful touches. Super clean and welcoming on all levels. Location is pretty central to all that Here and surrounding areas have to offer.",
            },
            {
              overall: 3,
              spotId: 88,
              userId: 5,
              review:
                "Drew and Caroline's place was amazing! Separate driveway leading right to suite. No stairs to climb- can unload right at door. Place was sparkling clean. So many nice touches-fresh fruit, outdoor gear available for use, board games - very thoughtful touches. very homey snd vomfortable! Only stayed one night and was sad to leave. Will definitely come back.",
            },
            {
              overall: 5,
              spotId: 89,
              userId: 5,
              review:
                "Great place for a stay in Here.   Very stylish and clean.  Great location!",
            },
            {
              overall: 4,
              spotId: 90,
              userId: 7,
              review:
                "This is a basement suite in a quiet neighborhood. This is close to major roadways and Here is about 20 minutes away. The Blue Ridge Parkway is close by too for some nice drives. The suite has a driveway just for it that goes right to the door so unloading and loading the car is a breeze. A very nice addition for multi-day stays is the washer and dryer in the suite to make sure you can pack up clean clothes for the ride out. The host communication was great for making sure we got in and situated ok. The only issue might be some noise from the upstairs on occasion. If you are a light sleeper bring a white noise system or app and you'll be ok. Overall this is a great place to stay and you will be very comfortable.",
            },
            {
              overall: 5,
              spotId: 91,
              userId: 4,
              review:
                'Drew and Carolina have thought of all the "extras" possible. The suite was incredibly homey and immaculately clean. They checked in frequently to make sure we had everything we needed. We highly recommend this suite for those traveling to Here!',
            },
            {
              overall: 4,
              spotId: 92,
              userId: 10,
              review:
                "Beautiful place, awesome hosts, will stay there every time I am around Here",
            },
            {
              overall: 4,
              spotId: 93,
              userId: 9,
              review:
                "Great spot just outside of NHere with everything you'd need! Drew and Caroline provided great advice on things to do and places to see around town, and their place is just a few minutes away from everything!Highly recommend!",
            },
            {
              overall: 5,
              spotId: 94,
              userId: 2,
              review:
                "This was a great Airbnb. They provided thoughtful amenities like hiking poles and granola bars. The place was also very comfortable and clean. Also, the Asiana Grand Buffet is excellent and really close.",
            },
            {
              overall: 5,
              spotId: 95,
              userId: 4,
              review:
                "Our stay at Drew and Caroline's place was absolutely wonderful! Very quiet, clean, and comfortable. They were very sweet to work with us with a late check in. We would definitely stay here again when we visit Here!",
            },
            {
              overall: 3,
              spotId: 96,
              userId: 6,
              review:
                "Do not hesitate to book with Drew and Caroline. Their space is wonderful and the attention to detail is second to none. There is the ability to turnaround in the parking area but only if you have a smaller vehicle. Our F150 was too big to do so.",
            },
            {
              overall: 3,
              spotId: 97,
              userId: 5,
              review: "You can expect a very clean, comfortable place to stay.",
            },
            {
              overall: 3,
              spotId: 98,
              userId: 3,
              review:
                "Such a great place to stay. Great location,  clean, and very comfortable.",
            },
            {
              overall: 5,
              spotId: 99,
              userId: 8,
              review:
                "Drew & Caroline were great hosts! Their suite was very clean, cozy, and accommodating. Highly recommend their place!",
            },
            {
              overall: 5,
              spotId: 100,
              userId: 9,
              review:
                "This is the BEST AirBnB we have stayed in!  CHOOSE THEM!  You will not be disappointed.  The space was so cute and had Christmas touches added to the very stylish decor.  We loved our stay here.  So much better than a hotel and for a reasonable price.  If you have been wondering about trying an Air BnB, let this stay be your first try.  You will be glad you did.",
            },
            {
              overall: 4,
              spotId: 101,
              userId: 8,
              review:
                "Drew and Caroline are outstanding hosts. Their space is completely up to date, super clean, and has a unique stylish appeal. We had unexpected weather but Drew and Caroline were willing to accommodate any way they could. Highly recommend if in you're in the area!",
            },
            {
              overall: 5,
              spotId: 102,
              userId: 7,
              review:
                "Very nice people. Checkin was easy with no problems. Close to everything. It was also nicely decorated for the holidays and very clean. We would definitely recommend and will stay again.",
            },
            {
              overall: 5,
              spotId: 103,
              userId: 10,
              review:
                "Drew and Carolina were very nice and helpful. Their communication was great throughout the whole process and during my stay. The place was decorated nicely and very clean. I like how it was close to a lot of good places and things to do. Also, not far from downtown at all. Perfect place to stay if going to Here!",
            },
            {
              overall: 3,
              spotId: 104,
              userId: 2,
              review:
                "House was great, it felt very private. Great hosting & tips for things to do with kids. Great selection of games for kids to play with & location was fantastic. Everything felt very close & lots of shops to choose from.  This was the relaxing 5 days away we were looking for!",
            },
            {
              overall: 3,
              spotId: 105,
              userId: 7,
              review: "Awesome place. Highly recommend.",
            },
            {
              overall: 3,
              spotId: 106,
              userId: 3,
              review:
                "Drew and Caroline are PERFECT hosts! Their space is private, cozy and has everything you need to enjoy a night in Here, 10/10 would stay with them again !!",
            },
            {
              overall: 4,
              spotId: 107,
              userId: 6,
              review:
                "I would 100% recommend staying here! Drew and Caroline’s felt like home. It was clean and cozy, had great little touches and was close to the Biltmore and awesome other spots in Here. Loved our stay.",
            },
            {
              overall: 3,
              spotId: 108,
              userId: 10,
              review: "Great place",
            },
            {
              overall: 3,
              spotId: 109,
              userId: 6,
              review:
                "They can expect a very home experience with plenty of amenities and fun recommendations!",
            },
            {
              overall: 4,
              spotId: 110,
              userId: 6,
              review:
                "Excellent place in a very solid location. We arrived after midnight after a long day of driving, and it was so nice to be able to walk right in to such a lovely suite, with every amenity available, and fall right into a super comfortable bed. Drew and Caroline have obviously put a ton of thought and work into making this a great place for both a short weekend trip, or an extended stay. We couldn't be happier with our choice to stay there!!!",
            },
            {
              overall: 4,
              spotId: 111,
              userId: 10,
              review:
                "This space was absolutely amazing! Drew and Caroline provided absolutely everything we might need and were quick to respond. Not only was the space beautiful, but the homey touches and extra additions (like having a stash of my favorite coffee) really went above and beyond our expectations. We will definitely be staying here again.",
            },
            {
              overall: 3,
              spotId: 112,
              userId: 10,
              review:
                "Drew and Caroline’s place is the best Airbnb I’ve ever stayed at! They have a beautiful space and it is filled to the brim with special touches and decorations. My boyfriend and I wanted to go hiking and didn’t have to buy a single thing as the hosts had left a hiking bag with hiking poles and a map! They also have the most information about the area that I have ever seen in an Airbnb! We went to all of the places they recommended and were never disappointed with a single one. Drew and Caroline were very respectful of our privacy but was more than willing to help whenever we needed it! As an added bonus, their dogs are adorable :) If you are trying to find a place to stay in Here where you’ll get the most value out of your money then stay here!",
            },
            {
              overall: 5,
              spotId: 113,
              userId: 5,
              review:
                "Drew and Caroline were wonderful hosts. The Sweet Suite  met our needs perfectly!",
            },
            {
              overall: 4,
              spotId: 114,
              userId: 10,
              review:
                "We had such a great stay with Drew and Caroline! The space was perfect for the 4 of us. It was very clean and everything we might need was thought of and carefully planned. Will definitely visit again in the future!",
            },
            {
              overall: 5,
              spotId: 115,
              userId: 4,
              review:
                "Our stay was amazing. Caroline has thought of every detail. The space is extremely comfortable with all the amenities you could think of. I would stay there again for sure.",
            },
            {
              overall: 3,
              spotId: 116,
              userId: 8,
              review:
                "What a lovely place! So beautifully decorated and very comfortable!!",
            },
            {
              overall: 5,
              spotId: 117,
              userId: 4,
              review:
                "The Sweetest Suite you can find! Drew & Caroline were the perfect hosts, and everything was better than can be described. Check in and check out were seamless, the layout was perfect, and the distance to everything we wanted to do was exceptional! We are planning another girls trip and would absolutely stay here again. 10/10 would recommend to anyone!",
            },
            {
              overall: 4,
              spotId: 118,
              userId: 4,
              review:
                "Great space! Awesome location.   Super cute and clean space.  I would highly recommend to anyone and hope to stay again in the future.",
            },
            {
              overall: 3,
              spotId: 119,
              userId: 5,
              review:
                "A great place to call home while in Here. Perfect location to access all the town has to offer! Caroline and Drew showed much hospitality and thoughtfulness. The sweet suite is cozy and has everything one could need to enjoy their stay. Thank you!",
            },
            {
              overall: 4,
              spotId: 120,
              userId: 2,
              review:
                "Drew and Caroline were great host! We will definitely recommend the Sweet Suite to our friends and Family! Thank you making our anniversary trip so special! We can't wait to go back!",
            },
            {
              overall: 4,
              spotId: 121,
              userId: 10,
              review:
                "We had a great stay! The suite fit our needs perfectly and was so much better than staying in a hotel. We felt right at home!",
            },
            {
              overall: 3,
              spotId: 122,
              userId: 8,
              review:
                "I can’t say enough positive things about Drew and Caroline’s place. First off, it is ADORABLE and super clean with everything you need. They even have a washer and dryer which was very convenient! The location is central to just about anything you would want to do. Downtown Here is just 15-25 minutes down the road (traffic depending of course). Drew and Caroline were also great hosts. We tend to be low maintenance guests but they still made a point to check in and just make sure that everything was going well. Should we find ourselves in Here again we definitely won’t hesitate to book this space if it’s available. We recommend you do too!",
            },
            {
              overall: 4,
              spotId: 123,
              userId: 2,
              review:
                "Drew & Caroline are great hosts. They offer a perfect quiet retreat located in a lovely neighborhood with easy access to attractions in the area. You have a private driveway & entrance to a very clean & nicely decorated apartment.  As a couple, we found this apartment to be spacious & relaxing.  We enjoyed our stay & plan to return next year.",
            },
            {
              overall: 3,
              spotId: 124,
              userId: 3,
              review:
                "Absolutely blown away by how intentional and thoughtful Drew and Caroline are!! Truly a home away from home!! I will absolutely recommend this to a two or three person group visiting AVL.",
            },
            {
              overall: 5,
              spotId: 125,
              userId: 5,
              review:
                "Drew and Caroline’s place is so close to the Blue Ridge Parkway and a lot of newer cafes and shops. Also a quick trip to downtown. Perfect for an Here adventure!",
            },
            {
              overall: 4,
              spotId: 126,
              userId: 2,
              review:
                "This little gem was honestly the best part of our vacation. We just wanted to relax for a good portion of our trip and this space offered a perfect place for that. It was incredibly clean and there were little touches all over the place that we really appreciated! We wi definitely be back.",
            },
            {
              overall: 3,
              spotId: 127,
              userId: 5,
              review:
                "This place is better than any hotels outside of the 5 star resorts in Here...and its a close second to those. Its spotless, adorable, hip, comfy & incredibly convenient. It’s every bit as cute as the pictures if not cuter. They also left xtra special touches like granola & coffee as well as toiletries. Now on our list of favorites in Here!",
            },
            {
              overall: 5,
              spotId: 128,
              userId: 3,
              review: "Great host and clean place to stay.",
            },
            {
              overall: 3,
              spotId: 129,
              userId: 5,
              review:
                "This was my first time using Airbnb and I’m so glad I stayed here because it was amazing! Check in was easy and Drew and Caroline were so helpful with all of their recommendations and information in their guest binder. They thought of everything! The place was clean and quiet. I loved having a kitchen so I could cook. I will definitely be back!",
            },
            {
              overall: 4,
              spotId: 130,
              userId: 7,
              review:
                "Drew and Caroline are very friendly, helpful with local ideas for entertainment and activities and respected our privacy. The place was very clean, peaceful, stylish decor and stocked with necessities just in case you forgot something which came in handy. Our stay was very comfortable and I highly recommend this Airbnb!",
            },
            {
              overall: 3,
              spotId: 131,
              userId: 5,
              review:
                "Great place to stay! The weather turned out to be less than ideal for us so we will definitely be better for another stay in Here and will definitely stay with Drew and Caroline. Their little boy who brought us apples was just the cutest and he was super polite! We wish we could have stayed longer! Very homey! Highly recommend!",
            },
            {
              overall: 3,
              spotId: 132,
              userId: 2,
              review: "Great place with great amenities!",
            },
            {
              overall: 4,
              spotId: 133,
              userId: 4,
              review:
                "Stop looking and reserve this space. My son and I were looking for a place to stay for a couple of nights as we passed through Here. We were 5 days in our 14 day road trip. I was a bit nervous about staying at a home where the host lives too, but it was absolutely a non issue. The space was adorable, amenities plentiful, comfy bed, and great living space. Clean, adorable and a great location to check out Greater Here. Will visit again on my next trip home.",
            },
            {
              overall: 4,
              spotId: 134,
              userId: 8,
              review:
                "Drew and Caroline's place was very clean and comfortable. Better than staying in a hotel room. They give you complete privacy, but were available if needed. Also, it was very quiet. Would definitely recommend staying at their place.",
            },
            {
              overall: 4,
              spotId: 135,
              userId: 7,
              review: "Would stay again",
            },
            {
              overall: 5,
              spotId: 136,
              userId: 10,
              review:
                "Overall a very nice place with lots of personal touches, including maps, tea, coffee, snacks fruit, etc. It was also very homey and comfortable. Drew and Caroline were very helpful with questions, with Drew going above and beyond with hiking suggestions. Even though it is a basement apartment, we never felt we were intruding on another's personal space as there is a separate entrance and drive. Really, the only time we were aware of others was the occasional pitter patter of feet above, which I think mainly came from the dogs. Haha. I would highly recommend to others.",
            },
            {
              overall: 5,
              spotId: 137,
              userId: 8,
              review:
                "Great hosts! Would definitely stay again. Very clean and quick responses!",
            },
            {
              overall: 4,
              spotId: 138,
              userId: 5,
              review:
                "Best Air B&B experience! Lovely space, incredibly clean & welcoming, very clear directions! I will be staying here again!",
            },
            {
              overall: 5,
              spotId: 139,
              userId: 7,
              review:
                "Based on the reviews we'd read we expected Drew and Caroline's place to be lovely and comfortable, but they surpassed our already high expectations. The suite is so stylish, homey, and super clean! We had the experience of exploring a new city but feeling like we were returning \"home\" each night. They are also very responsive and generous hosts. We enjoyed it so much and can't recomend their suite highly enough. Hope to stay again on our next visit to Here!",
            },
            {
              overall: 4,
              spotId: 140,
              userId: 2,
              review:
                "Incredibly accommodating, swift in response, stylish, and kind!  Thank you!  I would book again in a heartbeat.  Thank you for offering such a serene location for high-stress CRNA students!",
            },
            {
              overall: 4,
              spotId: 141,
              userId: 4,
              review:
                "We stayed at Drew and Caroline’s on our way to Indiana and I’m bummed we couldn’t extend our stay. Their place is great!  The space is super clean and very well put together. They have everything you might need for an extended stay in Here. We will definitely be back. Highly recommend!",
            },
            {
              overall: 4,
              spotId: 142,
              userId: 2,
              review:
                "This is one of the nicest Airbnb’s we have stayed at. Great communication! We will come back again-loved it!",
            },
            {
              overall: 5,
              spotId: 143,
              userId: 4,
              review:
                "The perfect home away from home. Drew and Caroline’s retreat is centrally located, loaded with amenities, and their personal touches create a warm, welcoming environment. I highly recommend their place for your get-a-way.",
            },
            {
              overall: 4,
              spotId: 144,
              userId: 8,
              review:
                "Drew and Caroline have a beautifully decorated space, and they were so welcoming and helpful with local tips. They had gear available to use if you wanted to go hiking, and their two dogs were so delightful to play with in the yard. We would absolutely stay here again in the future!",
            },
            {
              overall: 4,
              spotId: 145,
              userId: 3,
              review:
                "We’re so glad that we picked this lovely place to spend a couple days. Drew and Caroline are super hosts!  Only regret is not scheduling another day or two.",
            },
            {
              overall: 5,
              spotId: 146,
              userId: 8,
              review:
                "Staying at Drew and Caroline's place was absolutely amazing. It feels like they have thought of everything you might need and their place is inviting, stylish, and feels like a home away from home. We would highly recommend it and would love to stay again!",
            },
            {
              overall: 5,
              spotId: 147,
              userId: 10,
              review:
                "Great location, excellent hospitality, very clean and spacious.  Will definitely be back again!",
            },
            {
              overall: 4,
              spotId: 148,
              userId: 8,
              review:
                "Drew and Caroline's place was comfortable, with a variety of homey touches.  Location is close to just about anything you might need.",
            },
            {
              overall: 3,
              spotId: 149,
              userId: 3,
              review:
                "Drew and Caroline have the cutest place. Their home is close to everything but still quiet enough if you want relax without the loud hustle and bustle. The amenities were great and the small attention to detail was amazing. I would love to stay again in the future.",
            },
            {
              overall: 3,
              spotId: 150,
              userId: 5,
              review:
                "Nice space.  Very large area and nicely decorated. Here is a happening city",
            },
            {
              overall: 3,
              spotId: 151,
              userId: 2,
              review: "Wonderful place to stay.  Very close to the Biltmore.",
            },
            {
              overall: 4,
              spotId: 152,
              userId: 7,
              review:
                "We had such a wonderful stay and really appreciated all of the thoughtful touches! The \"Sweet Suite\" was super clean and comfortable. We loved having a kitchenette for making coffee and preparing some breakfast before heading out each day. Drew and Caroline's home is located in the perfect spot between downtown and  Pisgah Forest, the latter was where we spent most of our time during the day, and downtown in the evenings for brewery sampling and dinner. Drew and Caroline always responded quickly and gave excellent recommendations and advice! I highly recommend their place if you're spending a few days in lovely Here!",
            },
            {
              overall: 5,
              spotId: 153,
              userId: 5,
              review:
                "Very comfortable stay and not far from town! It was spacious, clean, and cozy!",
            },
            {
              overall: 4,
              spotId: 154,
              userId: 10,
              review:
                "Highly recommend it.  Clean and delightful place to stay.  We would certainly stay again.Very quiet and having a private driveway is wonderful!",
            },
            {
              overall: 4,
              spotId: 155,
              userId: 9,
              review:
                "Here is a couple hours from where I live and I often go down for the day or a weekend. I recently stayed at Drew and Caroline's place for a night because I had to take a test in Here. It was the perfect place for me to rest the night before my test! I came prepared with everything I needed, but if I hadn't I would've been just fine! Their place was very accommodating with extra toiletries, snacks, etc. They also included a long list of things to see and do in Here which I appreciated! I would definitely stay there again and recommend anyone else to!",
            },
            {
              overall: 4,
              spotId: 156,
              userId: 2,
              review:
                "Great experience. We loved it and for sure we will be back!",
            },
            {
              overall: 3,
              spotId: 157,
              userId: 6,
              review:
                "Beautiful large apartment, with everything you would need, with an 18 minute drive to Here. Communication and instructions were all very clear. We met Carolyn on our departure morning.",
            },
            {
              overall: 3,
              spotId: 158,
              userId: 8,
              review:
                "Drew and Caroline's has to be one of the BEST AirBnB's in the Here area!  It was a lovely space just south of downtown so it was easy to get everywhere.  The \"apartment\" was not only cozy but also very clean upon our arrival.  Most everything a guest could need was provided/available.  It was so handy to have private laundry as well!  If we are ever in the Here area again, we will definitely book with Drew and Caroline again!",
            },
            {
              overall: 4,
              spotId: 159,
              userId: 8,
              review:
                "Drew and Caroline are some of the best hosts I’ve ever had! The place is very stylish, clean, and private. I would love to stay there again next time I’m in town, and I would definitely recommend it to friends and family!",
            },
            {
              overall: 3,
              spotId: 160,
              userId: 5,
              review:
                "I cant say enough about our stay with Caroline and Drew. We use airbnb for all of our travels, and this was by far our favorite stay. The unit was immaculately clean. Caroline has thought of everything you could possibly need, anything you may have forgotten, and things you never thought you would use. They were very receptive and hospitable. Caroline even went out of her way to help me with a birthday surprise for my fiance during our trip. Location was great for hiking, mountain biking, downtown Here, and local grocery etc.  Drew was able to give us insight to outdoor activities in the area. Without a doubt, we will stay with them during our next trip back to Here.",
            },
            {
              overall: 3,
              spotId: 161,
              userId: 5,
              review:
                "Drew and Caroline's place is spacious, clean, quiet and was the perfect rest stop for us.  We'd arrived after dark and the purple light on the tree was perfect to find the driveway.  Many other touches were equally thoughtful. We will stay again",
            },
            {
              overall: 3,
              spotId: 162,
              userId: 7,
              review:
                "We loved our stay. It was a cute and clean place! I wouldn't definitely stay here again.",
            },
            {
              overall: 5,
              spotId: 163,
              userId: 6,
              review:
                "You will not be disappointed. this place exceeded our expectations in almost every way.the location is good and the value is extraordinary",
            },
            {
              overall: 4,
              spotId: 164,
              userId: 8,
              review:
                "Just as described and immaculate.  A very good Airbnb.  Would stay again.",
            },
            {
              overall: 3,
              spotId: 165,
              userId: 5,
              review:
                "This treasure of a place was delightful!  It was very comfortable and clean. They have thought of everything. There are items to borrow while there i.e.  for hiking, etc. Drew and Caroline were very easy to communicate with and in a timely manner. There is a wealth of information about the area in the space as well as games for kids.  We would love to return if we come back to Here.  Very cool place!",
            },
            {
              overall: 3,
              spotId: 166,
              userId: 8,
              review:
                "The Sweet Suite was a stylish escape in the beautiful mountains of North Carolina. The amenities were fantastic and included laundry, travel soaps, and coffee! We were thrilled to stay in this space and hope to do so again!",
            },
            {
              overall: 5,
              spotId: 167,
              userId: 5,
              review:
                "Extra roomy, extra clean, extra quiet, extra nice personal touches -- everything about this rental is extra nice. Will highly recommend to friends traveling to Here and plan to use it again ourselves.",
            },
            {
              overall: 3,
              spotId: 168,
              userId: 6,
              review:
                "The best place we ever stayed. Clean, comfortable, well maintained. Wonderful hosts. Very accommodating. Loved it!",
            },
            {
              overall: 5,
              spotId: 169,
              userId: 9,
              review:
                "Awesome place! My wife and I went here for our honeymoon and it was a great home base for our hiking adventures in the area. Super quite and has a great, homey feel.",
            },
            {
              overall: 3,
              spotId: 170,
              userId: 8,
              review:
                "Great place to stay while in beautiful Here. The place was awesome, with nice little touches such as fresh flowers placed here and there and snacks. After being on the road for 4 days, I was thrilled to see a washer and dryer! I hope to stay with Drew and Caroline again.",
            },
            {
              overall: 5,
              spotId: 171,
              userId: 4,
              review:
                "We had a great stay.  The home was very clean and Caroline and Drew were great host.",
            },
            {
              overall: 3,
              spotId: 172,
              userId: 4,
              review:
                'We loved our Here getaway at this Airbnb.It is very conveniently located to everything.It has everything you would, could, possibly need.The place is modern and tastefully decorated:  Tiled floors, all necessary amenities, fans, throw blankets, internet, roku streaming, etc.Coffee, tea, granola bars were provided, and there are plenty of supplies in case you forget something.A washer and dryer helped tremendously.  This will be a "must stay" when we\'re in the area.',
            },
            {
              overall: 4,
              spotId: 173,
              userId: 9,
              review:
                "A wonderfully comfortable, clean and cute place to stay during a visit to Here.  I cannot wait to visit again.",
            },
            {
              overall: 5,
              spotId: 174,
              userId: 2,
              review:
                "Drew and Caroline's place was very clean and comfortable, with many nice touches that made their space feel like home.",
            },
            {
              overall: 3,
              spotId: 175,
              userId: 4,
              review:
                "Caroline & Drew's place will exceed your expectations! Sparkling clean! They've thought of every detail that will make your stay comfortable.",
            },
            {
              overall: 3,
              spotId: 176,
              userId: 4,
              review:
                "We only got to stay here one night, we would have loved to stay longer! The hosts were quick to communicate & we had everything we needed to be comfortable. Super clean & great safe location!",
            },
            {
              overall: 5,
              spotId: 177,
              userId: 2,
              review:
                "Drew and Caroline went above and beyond to make sure my our stay in their place was wonderful. All of the little touches, such as some toiletries and little breakfast snacks, exceeded our expectations. I would absolutely stay with Drew and Caroline again. They were amazing hosts and their place was the sweetest and very clean!!",
            },
            {
              overall: 3,
              spotId: 178,
              userId: 8,
              review:
                "Stayed for business trip to Arden.  Great location, clean, comfortable, and hassle free access.",
            },
            {
              overall: 5,
              spotId: 179,
              userId: 4,
              review:
                "Had a wonderful stay at the Sweet Suite! Really one of the best out there and exceeded our expectations in every category! Loved the decorating. Super comfortable. Easy entry. Great communication. Apartment is well stocked for anything that you might possibly need when you're traveling that you might have forgotten. Highly recommend!",
            },
            {
              overall: 3,
              spotId: 180,
              userId: 9,
              review:
                "Everything as advertised and much more. You won’t be disappointed! Very clean, spacious and cozy place.",
            },
            {
              overall: 3,
              spotId: 181,
              userId: 3,
              review: "Wonderful!",
            },
            {
              overall: 3,
              spotId: 182,
              userId: 6,
              review:
                "Drew and Caroline's place was clean and comfortable and very attractive. Highly recommend.",
            },
            {
              overall: 4,
              spotId: 183,
              userId: 8,
              review:
                "The place was well thought out, from the decor to the little things like exchanging toiletries and snacks. It was super clean and had everything we needed plus some games (which we really enjoyed). They're great at responding in a timely manner, I really appreciated it. I wish I would have known that the owner lived right upstairs though. The space is not suitable for more then a night or two stay. There is no stove to cook, there is only a toaster oven and microwave.",
            },
            {
              overall: 4,
              spotId: 184,
              userId: 6,
              review:
                "Great location; close to Biltmore and one of Here’s fabulous salt spas as well as arts, entertainment, and restaurants galore (including lots with gluten-free and vegetarian foods). The space was sparkling clean, and we really enjoyed having a bedroom separate from the living room and kitchen area. We stayed at Caroline and Drew’s during December, so the place was decorated for the holidays, which made it extra festive! Thanks for a wonderful experience.",
            },
            {
              overall: 4,
              spotId: 185,
              userId: 6,
              review:
                "My parents absolutely adored this place. They were extremely surprised by the nice little touches and thoughtfulness of the place. It was so close to everything in Here with just a few minutes drive. They will definitely come back to stay when in the area again. Drew and Caroline’s place is simply amazing!",
            },
            {
              overall: 5,
              spotId: 186,
              userId: 6,
              review: "Great location! Super spacious! Friendly hosts!",
            },
            {
              overall: 3,
              spotId: 187,
              userId: 3,
              review: "Most stylish airbnb I've stayed in around Here",
            },
            {
              overall: 3,
              spotId: 188,
              userId: 5,
              review:
                "So clean, cozy, and quiet! It was enjoyable to stay so close to the places I visited while in Here. There's a lot to see and do and it's only minutes away!",
            },
            {
              overall: 4,
              spotId: 189,
              userId: 8,
              review:
                "We loved this sweet suite! Perfect for a couple’s weekend getaway. The place is decorated very nicely. We loved playing the games they had in the suite. I would recommend this Airbnb to everyone! Next time we plan to go to Here, this place will definitely be where we stay.",
            },
            {
              overall: 4,
              spotId: 190,
              userId: 10,
              review:
                "The Sweet Suite felt like it could have been home. Had everything we could have possibly needed, and was so conveniently located.",
            },
            {
              overall: 3,
              spotId: 191,
              userId: 4,
              review:
                "It was much better than our expectation. home was so cozy and clean and we could feel host's thoughtful touch in every corner.",
            },
            {
              overall: 5,
              spotId: 192,
              userId: 2,
              review:
                "Top notch spot, the small details are all covered, it will feel just like home!",
            },
            {
              overall: 5,
              spotId: 193,
              userId: 4,
              review:
                "We had a wonderful day at Drew and Caroline's place. It was very enjoyable and their information we felt was very accurate to our stay.",
            },
            {
              overall: 5,
              spotId: 194,
              userId: 10,
              review:
                "We loved our stay! It was in a perfect location and decorated so cute! Thank you for your amazing hospitality and wonderful recommendations!",
            },
            {
              overall: 5,
              spotId: 195,
              userId: 3,
              review: "Fantastic place to stay.  Book it.",
            },
            {
              overall: 5,
              spotId: 196,
              userId: 4,
              review:
                "Drew and Caroline were wonderful hosts. I would highly recommend their suite for anyone looking for a place near Here.",
            },
            {
              overall: 4,
              spotId: 197,
              userId: 9,
              review:
                "Very clean, thoughtful and beautiful place. They provided very useful and enjoyable suggestions on stuff to do and made our visit better than we were expecting. it was a true pleasure to stay in this sweet suite and we will definitely be using this spot for future stays.",
            },
            {
              overall: 3,
              spotId: 198,
              userId: 4,
              review:
                "You can expect to be taken in by the host and the scenery. A great place to recharge your batteries.",
            },
            {
              overall: 4,
              spotId: 199,
              userId: 6,
              review:
                "We LOVED staying here! Everything was so clean, thoughtful and stylish. We will definitely book again one day when we come back to Here!",
            },
            {
              overall: 4,
              spotId: 200,
              userId: 4,
              review:
                "Drew and Caroline's place was wonderful!  They had great suggestions for exploring Here,  and wonderful little touches in the space.  Lots of room.  I personally loved the wall poster of the woods!  Would love to go back!",
            },
            {
              overall: 3,
              spotId: 201,
              userId: 9,
              review:
                "Ditto on all the super positive reviews!  My only complaint is that I don't live here full time!It was a very positive air bnb experience. 10 minutes from Biltmore and very close to a neat little park called Lake Julian where we ate lunch and watched geese on the water.Definitely recommend!",
            },
            {
              overall: 3,
              spotId: 202,
              userId: 4,
              review:
                "We loved the “sweet suite”! The name says it all! The owners thought of everything. As soon as you walk in the door from your  own driveway and parking, you will feel at home. It is so cozy and everything is sparking clean! Plenty of space to relax and enjoy downtime. There are even board games to play. It is close to downtown without being right in the middle of the hustle. We very much enjoyed our stay and would absolutely recommend it. It surpassed our expectations.",
            },
            {
              overall: 5,
              spotId: 203,
              userId: 7,
              review:
                "This sweet suite is ideal!  My husband and I had tickets for a special exhibit at Biltmore House, and Drew and Caroline’s place was the perfect landing spot for us during the weekend.  Their information book is a treasure!  We loved the cozy, comfortable, and convenient suite for our fun Here weekend.  Highly, highly recommend!",
            },
            {
              overall: 4,
              spotId: 204,
              userId: 9,
              review:
                "Comfy, cozy,  quiet and clean hideaway! Great location and amenities.  We would definitely stay here again.",
            },
            {
              overall: 5,
              spotId: 205,
              userId: 10,
              review:
                "Drew and Caroline are awesome hosts. They have a super clean, comfortable & stylish place with nice little touches. Would definitely stay again!",
            },
            {
              overall: 4,
              spotId: 206,
              userId: 7,
              review:
                "Drew & Caroline’s Suite is a darling, comfy, and clean abode. Amenities are over the top! Drew & Caroline and their family, including Noodle and Mabel, are thoughtful, kind, and friendly. The Suite is a very comfortable and affordable stay! You’ll be pleased!",
            },
            {
              overall: 4,
              spotId: 207,
              userId: 5,
              review:
                "Drew & Caroline’s space is just as advertised. Clean, safe, just a short drive to downtown Here. They provided lots of info with recommendations on what to do/where to eat during your trip. Communication was great with quick responses. This was a wonderful place to stay!",
            },
            {
              overall: 5,
              spotId: 208,
              userId: 4,
              review:
                "Drew and Caroline went above and beyond to ensure we were comfortable during a particularly trying time. The COVID-19 outbreak was on everyone’s mind.  They went through the unit and super sanitized high touch areas...even the pages in the amenities book.  Everything was very organized and clean, clean, clean!  We walked in and there was hand sanitizer to use just as we stepped in the door.   The bed is super comfy and the linens very comfy too.  I can’t thank them enough.  We will definitely stay here again!!",
            },
            {
              overall: 5,
              spotId: 209,
              userId: 3,
              review:
                "What you see is what you get! This is a great place and price.  The thoughtfulness that went into the details is amazing. We'll be booking again in the future.",
            },
            {
              overall: 5,
              spotId: 210,
              userId: 6,
              review:
                "The Sweet Suite was exactly that!  Drew and Caroline made sure that the Suite was super clean and that we had everything we needed.  Truthfully, it's even better in person than the pictures show...which is hard to fathom.  Another thing that is just as nice as the suite itself is the location.  It's in a very nice, quiet neighborhood, but there are plenty of other places around that are literally a 5 minute or less drive to.  If you are in town to mainly explore downtown Here, it is no more than a 20 minute or so ride.  Our second day of our trip, we drove out to hike in Pisgah National Forest to John Rock and that wasn't but around 45 minutes.  If you're a runner, it's only 1 mile to Biltmore Park where there is a nice paved greenway to run on.  There are loads of breweries to check out that also offer food.  (Side note: We recommend 12 Bones (great BBQ and brews), Mills River Brewing Company (excellent food truck on site, JuJu's) and Burning Blush Brewery.  All three of those are local, tasty and were open, new and very clean during this crazy time).  Seriously, you won't regret staying here. The things to do are endless and the place will truly feel like a very nice home away from home.",
            },
            {
              overall: 5,
              spotId: 211,
              userId: 10,
              review:
                "Our stay with Drew and Caroline was wonderful! They included so many thoughtful touches, like extra blankets, visitor info, yummy treats, board games, and a “wishing jar” for bottle caps and corks. There were no issues with noise, and their home is just a couple of minutes from several restaurants and stores, including Biltmore Park. The check-in and out processes were so easy. They provided hand sanitizer so that we could wash our hands immediately upon entering suite. On top of all of the amenities, the suite was very stylish and cozy! We loved everything about our stay, and we hope to visit again.",
            },
            {
              overall: 5,
              spotId: 212,
              userId: 3,
              review:
                "Great spot outside of Here that’s nice and close to the blueridge parkway!",
            },
            {
              overall: 4,
              spotId: 213,
              userId: 3,
              review:
                "The accommodations are as described, cozy and immaculate.",
            },
            {
              overall: 3,
              spotId: 214,
              userId: 3,
              review:
                'Not our first rodeo, here. Once again, it was a "Home run". We can\'t "Thank" Drew and Caroline enough for the wonderful hospitality.  Sparking clean, quiet and very welcoming! A must stay if you in the Here area. Except, when I need to use it.',
            },
            {
              overall: 4,
              spotId: 215,
              userId: 5,
              review: "This place was beyond our expectations!",
            },
            {
              overall: 3,
              spotId: 216,
              userId: 4,
              review:
                "Excellent location and the hospitality was great! We would definitely stay here again.",
            },
            {
              overall: 3,
              spotId: 1,
              userId: 10,
              review:
                "This place is so special!  Beyond being super clean and well appointed,  Drew and Caroline have paid extra attention to detail for their guests.  Perfect balance of giving guest privacy and distance but also being available for any questions, etc.  Great location minutes from everything just south of AVL (Arden) and still close to downtown or Hendersonville.  Private driveway and entrance.  Best guest book with local shopping/dining/activity resources for the area that I have experienced anywhere.  Already have another trip planned to AVL and even tho I have been to several in the area, this is my hands down favorite!",
            },
            {
              overall: 3,
              spotId: 2,
              userId: 5,
              review:
                "Everything about Drew and Caroline’s space made our stay so enjoyable- the personal touches- like teas, coffees and toiletries as well as the cute decorations were more than we could have expected. The locations is perfect and super close to the blue ridge parkway for great hikes and views. Caroline and Drew checked in with us throughout our stay and offered great tips for restaurants and breweries around town. Will definitely be staying here again!",
            },
            {
              overall: 5,
              spotId: 3,
              userId: 8,
              review:
                "Great place to stay! It is convenient, feels private and even the futon was comfortable.",
            },
            {
              overall: 3,
              spotId: 4,
              userId: 10,
              review: "A great place to send parents for a quick getaway gift!",
            },
            {
              overall: 5,
              spotId: 5,
              userId: 5,
              review:
                "We love staying at Airbnb’s and staying at Drew and Caroline’s was one of our favorites!! The attention to all the details was unbelievable, the accommodations, private parking area, nice quiet neighborhood, plenty of dining options (close by) and it’s not far from downtown!!We just returned back home...and we’d go back tomorrow!!Thanks again for a wonderful stay!!Bob & Rita",
            },
            {
              overall: 4,
              spotId: 6,
              userId: 9,
              review: "Great location and perfectly clean!",
            },
            {
              overall: 4,
              spotId: 7,
              userId: 3,
              review:
                "Drew and Caroline’s space is perfect. The location is ideal and we loved that it’s less than 10 minutes away from the Blue Ridge Parkway and less than 20 from downtown Here. Everything was so clean and well-kept. We also appreciated their health and safety precautions. We will absolutely be back and would hands down recommend it to friends and family!",
            },
            {
              overall: 4,
              spotId: 8,
              userId: 5,
              review:
                "Thank you very much for everything, without a doubt, this beautiful place to be exceeded all our expectations, I have been using the airbmb for many years.  in South America, in Europe and even in Russia and I have never seen so much attention to detail, everything is absolutely thought and planned so that the visitor has everything they need, and more.  Not only in the exquisite choice of each element that decorates the place but also in everything one needs, thank you very much",
            },
            {
              overall: 4,
              spotId: 9,
              userId: 9,
              review:
                "Our stay at Drew and Caroline's was wonderful! We planned a last-minute overnight and they communicated very quickly. We appreciated the measures they had taken to keep the space clean and sanitary during COVID. Check in was easy, our stay was very comfortable, and I loved the little eclectic touches around the apartment (like all the different knobs for hanging gear). Caroline's suggestions for dinner - 131 Main - and for the Glass Shop were spot on!  The location was conveniently close to many shops and restaurants but in a woodsy and peaceful residential area. We would certainly stay again!",
            },
            {
              overall: 3,
              spotId: 10,
              userId: 5,
              review:
                "What a great suite and location! A short drive to some great eats, drinks, and adventures makes this a perfect landing spot.",
            },
            {
              overall: 3,
              spotId: 11,
              userId: 5,
              review:
                "Drew and Caroline's place is lovely, clean, organized, and exactly as pictured. There were so many details that were taken care of, including  labeled spots for items and for how to use things, a take/give pile of toiletries,  a welcome binder, and ideas for local restaurants and places to check out. It was such a great place to stay. One of the nicest Airbnbs I have stayed at!",
            },
            {
              overall: 5,
              spotId: 12,
              userId: 6,
              review:
                "Drew and Caroline’s AirBnB exceeded our expectations. Our expectations... being honest... were lower than the pictures and description of their place. To date, we’ve stayed in 3 AirBnB’s prior to here. For these prior stays, we feel like the pictures and descriptions were all misleading. This is the first AirBnB that we’ve stayed in where we felt like we got what we saw in pictures and the description wasn’t misleading. I wished my previous experiences with AirBnB were as good as this stay. I have renewed hope that we can and will have future good stays with AirBnB. If you’re a little shy on booking an AirBnB due to previous experiences... I understand. But I say on this place don’t hesitate. What you see is what you will get. We really liked our stay here. Comfortable. Cozy. Perfect for a couples getaway. My only suggestion is if you plan on keeping perishables in the fridge turn it “down” to 5 or 6 to get it to a proper temperature. Thank you for the stay!",
            },
            {
              overall: 4,
              spotId: 13,
              userId: 4,
              review:
                "We thoroughly enjoyed out visit as it was above our expectations.  Cute , comfy and quaint!  Really enjoyed the fire pit and how close we were to everything! Also love the fact that this is a way for supporting kiddos and their college!  Happy staying!!  We will be back again.",
            },
            {
              overall: 4,
              spotId: 14,
              userId: 2,
              review:
                "Everything was better that we expected. It will be a delight to come here whenever we are in the area.",
            },
            {
              overall: 3,
              spotId: 15,
              userId: 8,
              review:
                "This place has it all and then some! We have stayed in many bnbs and this one was by far one of the best. It’s clean, comfy and has everything you need. Not to add that Caroline and Drew are quick to respond, offer tips and just check in to make sure you’re enjoying your stay.",
            },
            {
              overall: 3,
              spotId: 16,
              userId: 3,
              review:
                "Drew and Caroline’s apartment is an amazing find for an Here stay! The location is perfect, just a quick drive up the street to everything the area has to offer. The place is super private, safe, and comfortable. The hosts have the place stocked with anything and everything you possibly could need for your stay. I will definitely be looking for the “Sweet Suite” on my next Here visit!!",
            },
            {
              overall: 4,
              spotId: 17,
              userId: 4,
              review:
                "Awesome place in a very convenient location near everything in Here with amazing hosts! Highly recommend a stay here",
            },
            {
              overall: 4,
              spotId: 18,
              userId: 3,
              review: "A really nice place to relax. I highly recommend it!",
            },
            {
              overall: 4,
              spotId: 19,
              userId: 4,
              review:
                "Absolutely incredible stay! Drew and Caroline were attentive to our needs and offered so many helpful tips and tricks for exploring the surrounding area.  Will definitely stay here again next time I am in Here!",
            },
            {
              overall: 3,
              spotId: 20,
              userId: 4,
              review:
                "Spacious, CLEAN, thoughtful touches .. would highly recommend this place!! Cute and quiet neighborhood.",
            },
            {
              overall: 5,
              spotId: 21,
              userId: 5,
              review:
                "We came through town for one night on our honeymoon road trip and I wish we’d booked a longer stay! The space was amazing and had everything we needed with a very comfortable bed. Checking in was easy and everything was super clean.  Will definitely look into booking again for a longer Here weekend!",
            },
            {
              overall: 3,
              spotId: 22,
              userId: 7,
              review:
                "Such a great location! Minutes from shopping, dining, and access to the blue ridge parkway! Drew and Caroline were wonderful host! Everything was very clean and necessities and more were provided.",
            },
            {
              overall: 3,
              spotId: 23,
              userId: 7,
              review:
                "Great place- very cute with many small touches that make it very homey! Good location and hosts were very communicative.",
            },
            {
              overall: 5,
              spotId: 24,
              userId: 6,
              review:
                "Absolutely wonderful place to stay close to Here. Very thoughtful host. Lots of recommendations. Comfortable, clean, and close to lots of activities.",
            },
            {
              overall: 3,
              spotId: 25,
              userId: 4,
              review:
                "Cute spot in a great location. You can tell they’ve spent a lot of time to make it homey. Would definitely return.",
            },
            {
              overall: 4,
              spotId: 26,
              userId: 2,
              review:
                "FIVE STAR all the way! Cozy space, great location, thoughtfulness with amenities...We can’t wait to come back and hope this place is available. Don’t miss this space it’s amazing!!",
            },
            {
              overall: 5,
              spotId: 27,
              userId: 3,
              review:
                "Such a cute suite with incredible hosts! The location was awesome, everything in the space was extremely clean and very comfortable amenities. I loved the welcome binder filled with Here recommendations and tried a new restaurant from it!! :)",
            },
            {
              overall: 4,
              spotId: 28,
              userId: 9,
              review:
                "Perfect place to stay! Feels like home and was perfect to start our Blue Ridge Parkway trip. We will be back for sure!",
            },
            {
              overall: 5,
              spotId: 29,
              userId: 2,
              review:
                "Beautifully furnished and super comfy!! There were so many thoughtful touches throughout the space. It was a perfect location for us in between lots of local hiking, and close enough to downtown that we got to enjoy Here's breweries too!",
            },
            {
              overall: 5,
              spotId: 30,
              userId: 8,
              review:
                "The space was perfect for our needs!  The bed was comfortable and there were plenty of linens and blankets for the crisp evenings.  Added touches like the art, snacks, and hook storage made the space feel warm and inviting.  Great hosts!",
            },
            {
              overall: 3,
              spotId: 31,
              userId: 10,
              review:
                "Drew & Caroline’s place was perfect for visiting Here and the Blue Ridge Parkway.  The accommodation itself was better than expected. They had lots of suggestions of things to do and restaurants. Their communication was very quick and helpful. I would definitely recommend this place to anyone visiting Here, and I will definitely be back the next time I’m in the area.",
            },
            {
              overall: 3,
              spotId: 32,
              userId: 3,
              review:
                "This cozy place is comfortable and immaculate. We felt as if we were smack dab in a NC mountain spot, in a charming mid century modern neighborhood. Great hospitality and close to takeaway places. Perfect for our needs.",
            },
            {
              overall: 4,
              spotId: 33,
              userId: 4,
              review:
                "Great clean and safe spot.   Perfect for a trip to Here and the Biltmore House",
            },
            {
              overall: 5,
              spotId: 34,
              userId: 8,
              review:
                "I HIGHLY recommend this AirBNB with Drew and Caroline.  The space was spotless clean, cozy, detailed touches for guests, and a great value for being close to Here, Hendersonville, and other state parks.   Also, Caroline's instructions were detailed and she was very fast to respond.",
            },
            {
              overall: 4,
              spotId: 35,
              userId: 9,
              review:
                "Drew and Caroline’s place was exactly as advertised. Nice bedroom, open kitchen / living area, and everything was very clean. Would definitely stay again",
            },
            {
              overall: 4,
              spotId: 36,
              userId: 2,
              review:
                "Great experience.  Location was great.  Very clean and cozy.  Would definitely stay here again.",
            },
            {
              overall: 4,
              spotId: 37,
              userId: 6,
              review:
                "Cozy, large space with lots of artsy touches. We felt very comfortable and Drew and Caroline were VERY quick to respond to our questions. We had a great stay!",
            },
            {
              overall: 5,
              spotId: 38,
              userId: 7,
              review: "Such a nice stay. Highly recommended!",
            },
            {
              overall: 5,
              spotId: 39,
              userId: 6,
              review:
                "Highly recommend this as a place to stay. Convenient location, quiet/safe neighborhood, clean area with a nice rustic cabin feel. Will be staying here again!",
            },
            {
              overall: 5,
              spotId: 40,
              userId: 10,
              review:
                "We had a great stay at the Sweet Suite!  Drew and Caroline were excellent hosts.  The suite was spotless (and as advertised) and the keyless entry made checking in easy.  Their home is in a cute neighborhood in South Here that is close to amenities and attractions like the Biltmore and NC Arboretum.  It was also very close to a Blue Ridge Parkway entrance (which was closed when we were there because of ice/snow).  The space comfortably fit our family of four.  There were board games/puzzles and lots of information about area attractions.  It was the perfect spot for a weekend in Here.",
            },
            {
              overall: 3,
              spotId: 41,
              userId: 10,
              review:
                "I’m not sure where to start. If you’re in town, stay here. It’s cozy and has everything you need. Drew and Caroline give you so many local tips and ideas and have small touches all around. You feel like you’re staying at home when you’re here. Great place and great hosts, honestly has been my best Airbnb experience so far. Thank you so much!",
            },
            {
              overall: 4,
              spotId: 42,
              userId: 6,
              review:
                "Ambience was really good. It was kinda hard to find the location as I checked in way too late, but Caroline helped us out the moment I reached out to her.",
            },
            {
              overall: 3,
              spotId: 43,
              userId: 3,
              review: "We had a wonderful stay!",
            },
            {
              overall: 5,
              spotId: 44,
              userId: 3,
              review:
                "The Sweet Suite is exactly as described except even more wonderful! The space is clean, stylishly decorated, and so welcoming. Drew and Caroline are always just a text or call away. Also, their pups are so cute! We can’t wait to come back with our 4 year old!",
            },
            {
              overall: 5,
              spotId: 45,
              userId: 9,
              review:
                "My husband and I came here for a little baby moon before the arrival of our first child! The space was super clean, and had everything we could ever wish and imagine from an Air BnB. If we are back in Here we would love to stay here, we highly recommend this spot!",
            },
            {
              overall: 3,
              spotId: 46,
              userId: 7,
              review:
                "This was our second stay at Drew and Caroline’s, so that alone should tell you how much we love it! It’s in such a great location and we felt right at home. We can’t recommend it enough!",
            },
            {
              overall: 5,
              spotId: 47,
              userId: 4,
              review:
                "There are no words that could describe how perfect our trip was. Drew & Caroline really went out of their way to make us feel at home. The house was beautiful and super clean. It was a blessing to be able to spend our vacation here. We’ll certainly be back!",
            },
            {
              overall: 3,
              spotId: 48,
              userId: 10,
              review: "Spacious comfortable environment. Lovely spot.",
            },
            {
              overall: 4,
              spotId: 49,
              userId: 10,
              review:
                "It's an awesome place! It has a great location, easy check-in, and a homey feel. I'd definitely recommend it to anyone.",
            },
            {
              overall: 5,
              spotId: 50,
              userId: 2,
              review:
                "I will start out by saying everything about are stay was 5 stars. When we walked in for the first time we were blown away by how nice the place was. The pictures do not do it justice.The FROG had some of the nicest floors I have ever seen. They used old refinished barn wood, the the kitchen had brand new quartz counter tops and beautiful cabinets. The space was also perfectly clean and taken care of.You are surrounded by nature when you look outside the windows. The apartment also had tons of natural light and there are window shades on all the windows so you can sleep in. Even though it was on the same property has the host it was extremely quite at all times. The space felt very private. It is located in a great family neighborhood that feels extremely safe. Matt and Cassie were amazing hosts, they were very helpful and also respected our space. It never felt we were intruding on there space and them on ours.I look forward to staying there again in the future.-Adam and Lauren",
            },
            {
              overall: 3,
              spotId: 51,
              userId: 4,
              review:
                "This place is a hidden gem, & Cassie & Matt made it seamless. Lovely decor, privacy, & thoughtful touches to help us enjoy our stay & be familiar with the area. Would definitely stay again.",
            },
            {
              overall: 5,
              spotId: 52,
              userId: 3,
              review:
                "This place was great! Less than 10 minutes away from downtown, only 20 minutes away from Sierra Nevada, and 15 minutes away from the Biltmore! We were amazed how convenient this location was for all of our activities! Matt and Cassie were very responsive, and the place was perfect for a couple. We can’t wait to come back!",
            },
            {
              overall: 4,
              spotId: 53,
              userId: 4,
              review:
                "Matt and Cassie's space is beautiful and the location is so convenient to many great bars and restaurants in Here. We were able to Uber to everything including the Biltmore very easily. Matt and Cassie are great hosts and we will definitely be back to stay with them soon!",
            },
            {
              overall: 4,
              spotId: 54,
              userId: 7,
              review:
                "Great space - private, clean, has everything you would need. Perfect location that’s just a short Uber to the heart of Here. Matt and Cassie are great hosts and very responsive. We’re looking forward to our next trip!",
            },
            {
              overall: 4,
              spotId: 55,
              userId: 10,
              review:
                "My wife and I had a fantastic time with our quick, quiet getaway to Here. The neighborhood could not have been more peaceful and the space exceeded our expectations. When we pulled up to our reserved parking spot, the stairway to the rental lit up to ensure we felt welcomed and weren't fumbling around with our stuff in the dark, since we had arrived after sunset. The kitchen, bedroom, bathroom - it was all very beautiful, styled elegantly and it appeared to have recently been remodeled. It was a treat to be able to enjoy the fall weather with the windows open as it rained outside. And the bed. So comfortable. We got SUCH a good night of sleep in that bed my wife was doing everything she could before we left just to find out where the mattress and sheets were from! Overall it was a pleasant short stay in Here and we'd happily visit again and recommend to friends in a heartbeat.",
            },
            {
              overall: 4,
              spotId: 56,
              userId: 5,
              review:
                "Matt and Cassie’s place was perfection! It was very thoughtfully put together and they even had a binder full of suggestions on places to eat and things to do. Very helpful! The location is extremely convenient and the neighborhood is cute. Random bonus is that the sheets on the bed are SUUUUPER soft!! We would stay here again in a heartbeat!",
            },
            {
              overall: 5,
              spotId: 57,
              userId: 6,
              review:
                "What a wonderful little place —- I only wished I had booked for the whole weekend— quick trip but will be back! Absolutely perfect mix of decor and comfort — super comfy bed and nicely lit entrance if traveling alone. The lock is a little tricky but hosts were available to help in a second.. great suggestions for places to eat and hike — wonderful- you can’t go wrong!",
            },
            {
              overall: 3,
              spotId: 58,
              userId: 5,
              review:
                "This place has it all - stellar location, beautiful space and thoughtful hosts. Could not recommend it more!",
            },
            {
              overall: 3,
              spotId: 59,
              userId: 6,
              review:
                "Great space, great price! We loved that it was dog friendly. We didn’t get to meet Matt & Cassie but they left a great six pack and all the info you could need. Super cozy. Close to everything. We will be back!",
            },
            {
              overall: 4,
              spotId: 60,
              userId: 5,
              review:
                "Fantastic place to stay! Super nice appliances and amenities. Shirt ride from downtown. Couldn't have asked for a better spot.",
            },
            {
              overall: 4,
              spotId: 61,
              userId: 9,
              review:
                "The FROG was the absolute best! Matt and Cassie are the best hosts I have encountered on Airbnb. They were easy to communicate with and very quick to respond, and have obviously spent lots of time creating a unique and comfortable space. The space is gorgeous, very modern, welcoming, and clean! We loved the convient location to downtown and the cute neighborhood. We would definitely stay here again!",
            },
            {
              overall: 4,
              spotId: 62,
              userId: 5,
              review:
                "Matt and Cassie's place was amazing! Incredibly cute and so thoughtful - they left an incredible book of recommendations and even a 6 pack of Here brews. The apartment is brand new and completely outfitted with everything you might need. We were close to downtown but in an adorable neighborhood where we could walk our dogs. Definitely a great find and fantastic hosts!",
            },
            {
              overall: 5,
              spotId: 63,
              userId: 3,
              review:
                "Perfect location, close to downtown, an easy drive to the blue ridge parkway. Matt and Cassie offer a lovely space and even provide a list of special places to visit while in town. Can’t recommend them enough",
            },
            {
              overall: 4,
              spotId: 64,
              userId: 6,
              review:
                "Great space in a cozy area.  Highly recommend checking this place out.  Matt and Cassie were great.",
            },
            {
              overall: 3,
              spotId: 65,
              userId: 8,
              review:
                "Our stay at Matt and Cassie’s place was wonderful, with the FROG being the perfect size for three friends. It was clean and stylish, and only a short Uber ride from downtown, the Biltmore, and anywhere else we wanted to go. Matt and Cassie themselves were lovely - as was Ramble the dog! Definitely recommend the FROG to anyone visiting Here.",
            },
            {
              overall: 3,
              spotId: 66,
              userId: 10,
              review:
                "Very clean place, very stylish. Much closer to downtown Here than I imagined and so convenient. Cool experience all around.",
            },
            {
              overall: 3,
              spotId: 67,
              userId: 4,
              review:
                "Beautiful decor & great location-had everything we needed and more! The clean and safe environment comes with great hosts who are quick to respond to anything if it should come up! Thank you!",
            },
            {
              overall: 5,
              spotId: 68,
              userId: 5,
              review:
                "Matt and Cassie's airbnb is AWESOME.  It's stylish, clean, and in a great location.  We were only staying one night while en route home for Thanksgiving - we wished we were able to stay longer and plan to book The Frog again in the future.",
            },
            {
              overall: 4,
              spotId: 69,
              userId: 4,
              review:
                "The FROG was an amazing little getaway while visiting Here. The space was beautiful, clean and was very accommodating while traveling with my puppy. The tips of finding our way around Here were very helpful.",
            },
            {
              overall: 5,
              spotId: 70,
              userId: 7,
              review:
                "If you are going to Here there is no better place to stay! Matt and Cassie's place was not only beautiful and cozy, but in a great location for a peaceful morning and a VERY quick ride into town. We enjoyed having breakfast in the well equipped kitchen, walking our pup in their super cool neighborhood, and picking up a pizza a 5 minute walk down the road. They also provided us with a great list of what to do, eat, and drink in Here. Book now!",
            },
            {
              overall: 3,
              spotId: 71,
              userId: 3,
              review:
                "What an awesome place to stay near downtown Here! The hosts are just as amazing as their FROG. Very spacious, super clean and everything you could want out of a rental. If you are looking to stay in Here this should be your first and only choice. I usually choose To stay in hotels, but I won’t stay in Here again without contacting these fine folks first! Thanks again Matt and Cassie!",
            },
            {
              overall: 5,
              spotId: 72,
              userId: 7,
              review:
                "The FROG was great! We loved the location, we were able to walk to Great eateries in the most quaint neighborhood, we enjoyed the updated space that was full of detail, come here for a great local Here experience! Great Hosts! And Great Space!!! Ribbit ribbit!!!",
            },
            {
              overall: 5,
              spotId: 73,
              userId: 3,
              review:
                "Such a lovely visit to Here. I loved the adorable little space. It was cozy and safe.",
            },
            {
              overall: 5,
              spotId: 74,
              userId: 6,
              review:
                "The FROG is a great place to stay that is extremely close to everything in Here but still very private. My wife and I stayed here to celebrate our anniversary and would definitely do it again!",
            },
            {
              overall: 5,
              spotId: 75,
              userId: 10,
              review:
                "An absolutely beautiful place; the perfect spot for a long weekend or even a whole week! We loved being able to get to the mountains and to downtown Here; we especially appreciated being able to cook at home when we wanted to! Can't wait to be back.",
            },
            {
              overall: 4,
              spotId: 76,
              userId: 9,
              review:
                "My husband and I had a wonderful time at the FROG. It was a beautiful space and located so close to everything! The bed and linens were so incredibly comfortable. Big bonus we were able to bring our dog.. she travels everywhere with us! Matt and Cassie were quick to respond throughout the whole process. The whole space was so clean and had everything we needed. We will most definitely be back!!",
            },
            {
              overall: 3,
              spotId: 77,
              userId: 4,
              review:
                "The FROG was hoppin! We loved the private, well decorated apartment and ate breakfast in one morning. We loved the location in north Here which was an easy place from which to explore cute Weaverville as well. Zebulon artisan ales was cool! We walked along the closed sections of the Blue Ridge Parkway and Beaver lake. We ate at Curate, Stoney knob, sunny point, and Sierra Nevada which were all awesome! We wouldn’t hesitate to stay here again!",
            },
            {
              overall: 4,
              spotId: 78,
              userId: 5,
              review:
                "These two are awesome hosts and if we’re ever back in Here, we are definitely going to try to stay at their FROG!!!!",
            },
            {
              overall: 4,
              spotId: 79,
              userId: 2,
              review:
                "The FROG garage apartment was amazing. The decor was out of a magazine and everything was cozy and comfortable. Check in was a breeze. We're always so grateful when we don't have to sacrifice quality when staying with our pup. I think it was my favorite bnb I've stayed in so far! It's within walking distance to great places and a short drive to everything downtown. It was the cherry on top of a short, great trip to Here.",
            },
            {
              overall: 3,
              spotId: 80,
              userId: 6,
              review:
                "If you are looking for a get away, but really miss a homy atmosphere. This is the place. Matt and Cassie were wonderful hosts, and I regretted only staying one night. My boyfriend and I did a strenuous hike, and just wanted a nice bed and a kitchen to stay for one evening. We choose wisely and poorly at the time. The price, location, accommodations are just unbeatable.  This midcentury studio has the strength to carry a grand collection of art books and bathroom appliances that were made for the year 3019. I felt right at home with a spotless clean kitchen and the entire Harry Potter series.  I look forward to booking with them in the future. Thank you for a wonderful visit.",
            },
            {
              overall: 5,
              spotId: 81,
              userId: 7,
              review:
                "Matt & Cass are two of the best hosts, and the FROG is an un-beatable stay in Here. The place is new, stylish, comfortable and even puppy approved by our little aussie. As if the FROG wasn't amazing enough Matt & Cassie's hospitality is above and beyond. Quick responses, super friendly, and great recommendations & tips put together in the FROG (listen to the food and beer suggestions - they nailed it!). We cant wait to plan our next trip to the FROG this summer!",
            },
            {
              overall: 4,
              spotId: 82,
              userId: 10,
              review:
                "We had a wonderful stay at The Frog! The place is tastefully decorated and the location is perfect! A $5 Uber ride to downtown breweries, but tucked away in a quiet neighborhood. Our hosts were thoughtful and provided everything we needed and then some! It was a perfect place to bring our small pup and she enjoyed several walks in the friendly neighborhood! Matt and Cassie are great hosts and the FROG is a gem! Hope to return!",
            },
            {
              overall: 5,
              spotId: 83,
              userId: 9,
              review:
                "The Frog was awesome! The space is super stylish and in a good location. Matt and Cassie were great hosts and made it a point to make guests feel welcome. Would 100% stay again!",
            },
            {
              overall: 5,
              spotId: 84,
              userId: 5,
              review:
                "Amazing location, beautiful apartment. The only downside of being pet friendly is the white carpet and white bedding which of course has the potential of being problematic with pets around. Other than that it was a great stay and I would love to come back!",
            },
            {
              overall: 5,
              spotId: 85,
              userId: 6,
              review:
                "We really enjoyed our recent stay here. The FROG was stylish and welcoming, and came with plenty of recommendations for food and attractions. I hope to return!",
            },
            {
              overall: 4,
              spotId: 86,
              userId: 9,
              review:
                "Great apartment over the garage.  Very well appointed. Very responsive hosts, and sweet neighborhood. Plus you can walk to several restaurants.",
            },
            {
              overall: 5,
              spotId: 87,
              userId: 8,
              review:
                "Great space and great location! Just a short walk or drive to anywhere you need to go. The FROG is decorated so nicely you wont want to leave!",
            },
            {
              overall: 4,
              spotId: 88,
              userId: 10,
              review:
                "Very cute and super stylish upstairs apartment nestled over the garage that’s separate from the house. Has reserved parking and your own side entrance so it felt very detached from the main house. This space was sparkling clean and very cozy. Perfect space for a weekend not feeling too cramped with an open kitchen and living area. Maybe 1.5 mi from downtown and ingles .5 miles away which was very convenient. Would love to come visit again!",
            },
            {
              overall: 3,
              spotId: 89,
              userId: 7,
              review:
                "The house was spotless and decorated very nicely! You can tell the hosts pride themselves on keeping the place spotless and charming! I would stay here again for sure. Amazing unit and hosts!",
            },
            {
              overall: 3,
              spotId: 90,
              userId: 3,
              review:
                "Hands down one of our best Airbnb experiences. Everything was perfect.",
            },
            {
              overall: 4,
              spotId: 91,
              userId: 3,
              review: "Great space and great host!",
            },
            {
              overall: 5,
              spotId: 92,
              userId: 7,
              review:
                "Highly recommend Matt and Cassie's place. Very comfortable, very well decorated and just overall a great space. They provided a book of suggestions for everything from the brewery options to food options based on time, bars, etc. It was a perfect stay :).",
            },
            {
              overall: 3,
              spotId: 93,
              userId: 10,
              review:
                "Wonderful FROG! Had a blast. Great location, dog friendly, very clean, overall just a great place. Would definitely recommend staying here. It’s close to downtown Here and walkable to food and brewery!",
            },
            {
              overall: 3,
              spotId: 94,
              userId: 9,
              review:
                "We can't say enough great things about our stay in Here. We loved the FROG. It was perfect for those that want to be close enough to the downtown area, but far enough away to feel homey. The FROG is decorated with such fun decor and we loved all the extra touches like fresh flowers and a 6 pack of local beer. Matt and Cassie really have a gem and everyone should consider renting it. It was just what we needed to find peace and rejuvenation. They provided us with many suggestions on restaurants, bars, and fun things to do around town. Everyone should visit Here. Thank you Matt and Cassie for your wonderful hospitality. We hope to be back one day !",
            },
            {
              overall: 3,
              spotId: 95,
              userId: 3,
              review:
                "Perfect location + Beautiful Airbnb + awesome hosts. We felt right at home and loved all the special touches Matt & Cass provided from fresh florals to rad recommendations.100% would recommend this place to all travelers. We loved being able to take our dog with us on a weekend getaway. Will definitely be back to the FROG!!",
            },
            {
              overall: 3,
              spotId: 96,
              userId: 10,
              review:
                "Beautifully designed apartment above the garage.  New construction, but the barnwood flooring and older solid wood doors on the bedroom and bathroom give it character.  The apartment is really well layed out with separate sleeping and living spaces, and the kitchen has everything you'd need for cooking in.  The neighborhood is extremely convenient to Here, UNC campus, and the Blue Ridge mountains.  We had a wonderful experience!",
            },
            {
              overall: 3,
              spotId: 97,
              userId: 5,
              review:
                "Matt and Cass were awesome hosts!! The FROG was super cute, clean, cozy, and centrally located! Took us only 5 min to get to all of the fun places downtown. They left us some of their favorite local beers in the refrigerator, I liked this a lot. Would absolutely stay here again!",
            },
            {
              overall: 3,
              spotId: 98,
              userId: 7,
              review:
                "We were in need of a very last minute reservation and Matt was awesome with accommodating us on the fly. The apartment is new and BEAUTIFUL. We loved everything about it, including the quiet neighborhood location with its close proximity to downtown. Clean, spacious, and very comfortable. Great for preparing your own meals. Comfy bed! The Here FROG will definitely be our preferred place to stay next time we're in the area.",
            },
            {
              overall: 4,
              spotId: 99,
              userId: 7,
              review:
                "Super convenient neighborhood, lots of tips on things to do/where to go, and a super clean, beautiful space to chill out in with more than you need to feel perfectly at home.",
            },
            {
              overall: 4,
              spotId: 100,
              userId: 4,
              review:
                "This space is a jewel. The decor, location, cleanliness and comfortable bed makes me want to rate it 5 plus stars. I wouldn’t hesitate booking again and again.",
            },
            {
              overall: 3,
              spotId: 101,
              userId: 6,
              review:
                "If you are looking for the perfect place to stay while visiting Here...look no further! Matt and Cassie’s place is ADORABLE!!! The FROG was tastefully decorated...impeccably clean and so comfortable! They thought of everything...down to the fresh flowers! So close to downtown yet, quiet neighborhood! I will definitely be returning!!!",
            },
            {
              overall: 4,
              spotId: 102,
              userId: 7,
              review:
                "We really enjoyed our stay at the FROG. Matt and Cassie have thought of everything from local tips/beer to fresh flowers to make you feel welcome in their Airbnb. The location made commuting a breeze. We were a short cheap Uber from downtown and it was very easy to get to the Blue Ridge Parkway. We felt very safe walking our pup in the neighborhood. We also loved that it was within walking distance from awesome food. Vinnie’s is a must try!  We would definitely stay at the FROG again.",
            },
            {
              overall: 4,
              spotId: 103,
              userId: 5,
              review:
                "Awesome stay! It’s a very warm atmosphere and Matt and Cassie left a binder full of great local tips. Will definitely be back!",
            },
            {
              overall: 5,
              spotId: 104,
              userId: 2,
              review:
                "We stayed at the FROG for one evening and it was great. The place is decorated beautifully with touches of art and the outdoors. My wife and I were very pleased with the space and how accommodating they were, Matt even texted us with some extra recommendations for a bar to visit while we were out. The location is a very cute neighborhood but very close to all the activities. Though our stay was short; it was very sweet & we plan on staying here next time we are in town!",
            },
            {
              overall: 5,
              spotId: 105,
              userId: 8,
              review:
                "What a fantastic find to have spent 5 nights in the FROG. The space was welcoming, bright and comfortable. The location was a perfect jumping point for all we wanted to do in & around Here. Matt & Cassie were so easy to communicate with and we appreciated the welcome binder & beers. Definitely a spot to choose if you’re looking for quiet comfort in Here.  Thanks for having us!",
            },
            {
              overall: 4,
              spotId: 106,
              userId: 2,
              review:
                "We've stayed in many vacation rentals over the years, and this was one of our best experiences!  Beautifully appointed, superbly located, scrupulously maintained....We loved being able to walk down the hill for dinner and we were only 5 minutes away from the friend we came to visit.  We would definitely stay here again.",
            },
            {
              overall: 5,
              spotId: 107,
              userId: 8,
              review:
                "Matt and Cassie’s place was extremely neat and clean. The stylish decor was a welcomed surprise. They had thought of everything from freshly cut flowers to a book of tips. Excellent in every way.",
            },
            {
              overall: 3,
              spotId: 108,
              userId: 4,
              review:
                "This spot is so fun! It’s far enough away from the crazy downtown area, that you feel like you can enjoy resting and a bit of seclusion. But close enough to hop in on the hustle of the downtown shops every day. Super clean, super clear instructions, and outstanding amenities. Will recommend to any friends headed to the Charleston area!",
            },
            {
              overall: 3,
              spotId: 109,
              userId: 4,
              review:
                "Matt and Cassie were great hosts! The FROG was so clean and had adorable decor! I will be booking again for my next trip to Here!",
            },
            {
              overall: 3,
              spotId: 110,
              userId: 7,
              review:
                "Matt and Cassie’s place is so nice! The pictures do it justice, plus it is so clean! There were nice personal touches like fresh flowers, ginger candies, and a pack of local beer when you arrive. Matt was very responsive and flexible. We can’t wait to stay again next time we come!",
            },
            {
              overall: 3,
              spotId: 111,
              userId: 9,
              review:
                "Wow!  As soon as I walked in, I was already trying to figure out how soon I could get back to Here to stay at this Air BnB longer than 1 night!  Very, very clean, tastefully decorated and an extremely comfortable bed!!  Great hosts, can’t wait to go back again.  This is how all Air BnB’s should be.",
            },
            {
              overall: 4,
              spotId: 112,
              userId: 2,
              review:
                "What a fantastic space! This above garage apartment provided our own private space to enjoy a weekend in Here. Easy to find, great location near the Grove Park Inn and only 9 minutes to the River Arts or almost anywhere else in Here. The place was very clean, great amenities, soft bed with comfortable linens and pillows, and plenty of natural light. We would 100% stay here again!",
            },
            {
              overall: 4,
              spotId: 113,
              userId: 6,
              review:
                "This is the best Airbnb I have (Email hidden by Airbnb) fortable furnishings with lots of cute touches. We loved the frog pack of local brews in the fridge and the handmade guide book filled with lots of great restaurant and entertainment options.",
            },
            {
              overall: 5,
              spotId: 114,
              userId: 6,
              review:
                "The FROG was a perfect home base for exploring Here. The apartment was spotless, well designed, and thoughtfully appointed. It had everything we needed for a relaxing stay and was in a quiet and convenient neighborhood. It was the perfect choice for a couple traveling with a dog and we would not hesitate to recommend Matt and Cassie’s place.",
            },
            {
              overall: 4,
              spotId: 115,
              userId: 5,
              review:
                "I’ve stayed in a lot of Airbnb’s and the Frog is quite possibly my favorite. The space is comfortable, clean and beautiful. We really appreciated all the details/extra touch (fresh flowers, local brews, recommendations and more). Oh, and the bed is so comfortable, we couldn’t believe it! All around we had such an amazing stay. Our only complaint is that we didn’t have more time to spend at the Frog.",
            },
            {
              overall: 3,
              spotId: 116,
              userId: 6,
              review:
                "We stayed at the FROG for two nights and had a great time. The space was beautiful and the attention to detail was unexpected. Wish we could have stayed longer! Highly recommended if you find yourself in the Here area.",
            },
            {
              overall: 4,
              spotId: 117,
              userId: 2,
              review:
                "Clean and stylish apartment close to downtown. The hosts left us six packs of local brew in the fridge. Very thoughtful!",
            },
            {
              overall: 5,
              spotId: 118,
              userId: 2,
              review: "Cool name, cool place, cool host",
            },
            {
              overall: 5,
              spotId: 119,
              userId: 5,
              review:
                "Matt and Cassie have a wonderful space! This new F.R.O.G. was private, well decorated, well furnished, and very comfortable. It had everything and more! Beautiful spot!",
            },
            {
              overall: 5,
              spotId: 120,
              userId: 6,
              review:
                "Matt and Cassie’s place is perfect for a weekend getaway for a couple. Loved the kind touches of fresh flowers all over the apartment, the prompt replies, the quiet neighborhood and some welcome snacks. Don’t think, just book it.",
            },
            {
              overall: 3,
              spotId: 121,
              userId: 3,
              review: "Would definitely stay here again!",
            },
            {
              overall: 3,
              spotId: 122,
              userId: 8,
              review:
                "Great space! Adorable decor. Perfect layout and everything you need is provided. Highly recommend!!",
            },
            {
              overall: 3,
              spotId: 123,
              userId: 4,
              review:
                "This place was easily accessible and great location in Here!",
            },
            {
              overall: 4,
              spotId: 124,
              userId: 3,
              review:
                "The home was a wonderful get-away in Here! A very short drive to downtown. We enjoyed every second of the stay here. The decorating and cleanliness was A+. We also enjoyed our welcome basket of local beers from the area!!",
            },
            {
              overall: 5,
              spotId: 125,
              userId: 5,
              review:
                "The Frog was a wonderful place to stay in Here everything you need is super close.. grocery,resturants,bars,ect.. The Frog was amazzingly clean an decorated beautifully loved all the extra touches very well done!!! We enjoyed our stay cant wait to come back Thank you Matt & Cassie!!",
            },
            {
              overall: 4,
              spotId: 126,
              userId: 2,
              review:
                "I’m used to staying in the mountains when I visit Here but it was so nice to be so close to town for this long weekend trip. The rental is exactly as clean, comfy, cute, and accessible as described, pictured, and reviewed.",
            },
            {
              overall: 3,
              spotId: 127,
              userId: 8,
              review:
                "The FROG is a perfect private, well appointed flat from which to explore Here and the area.  Matt & Cassie are fantastic hosts who greeted us with some local beer and a whole book of recommendations for everything from food to breweries, to hikes.  It was great to be in a neighborhood and a to be able to return each night to peace and quiet and our own little hideaway.  Loved it!",
            },
            {
              overall: 5,
              spotId: 128,
              userId: 3,
              review:
                "What an amazing space. The FROG is a cozy and comfy place to stay. It’s just as described and better! The bed was comfortable (that’s always important)! Matt and Cassie are great communicators and they put up with all of my questions! We can’t wait to visit the FROG and Here again. Highly recommend!",
            },
            {
              overall: 4,
              spotId: 129,
              userId: 8,
              review:
                "If you are thinking about staying here, stop thinking and just book it. Matt and Cassie are amazing hosts. The space is quiet and private with great amenities available.  Matt and Cassie really seem to want to share their city with you and have a great book of recommendations that cover anything you may want to do, whether it is hiking, breweries, food, finding pet-friendly spaces, etc. If you are worried about the location, don't! The city is easy to get around if you have your own vehicle, and if you want to take a Uber or Lyft after going to some of the great breweries it is a quick and cheap ride.",
            },
            {
              overall: 5,
              spotId: 130,
              userId: 6,
              review:
                "An Airbnb gem! The Frog is kept meticulously clean, and has all the comforts of home (full kitchen, A/C and ceiling fans to keep cool in Here's humid summer weather, and smart TV with a great Soundsystem). Matt and Cassie are gracious hosts who make sure your stay in their apartment as comfortable as possible.",
            },
            {
              overall: 5,
              spotId: 131,
              userId: 4,
              review:
                "Don't stay anywhere else! Best bang for your buck here. Can uber or drive wherever you need to go. Great location! Super Clean! Even left me a 6 pack of local beer! Best hosts i've had!",
            },
            {
              overall: 4,
              spotId: 132,
              userId: 4,
              review:
                "The FROG is immaculately and tastefully decorated. Super comfortable and made us feel relaxed and right at home. We thoroughly enjoyed spending a day outside and coming back to the FROG for a break. The kitchen amenities were great, we could cook breakfast easily. the surroundings were very quiet/peaceful and you could hear the birds chirping away. Totally recommend staying here. You won’t regret it.",
            },
            {
              overall: 4,
              spotId: 133,
              userId: 3,
              review:
                "We had a great time at the FROG!  The apartment was clean and perfect for us and our dog.  The welcome six pack was such a sweet touch, and the binder of brewery and restaurant recommendations was much appreciated! We would happily stay again!",
            },
            {
              overall: 4,
              spotId: 134,
              userId: 9,
              review:
                "We can't recommend this place more highly. It was clean and very well appointed. The craftsmanship of their place made the stay that much more enjoyable. It's well located in a beautiful neighborhood. We will be back.",
            },
            {
              overall: 3,
              spotId: 135,
              userId: 2,
              review:
                "We had such a good time in your beautiful space! It was so welcoming— we loved the fresh flowers and local beers in the fridge. And we loved feeling like we were in a bright and breezy treehouse when we kept the windows open. Thank you for all the thoughtful touches (spare towels, and tea, and Netflix), everything was wonderful!",
            },
            {
              overall: 3,
              spotId: 136,
              userId: 4,
              review: "Great, artsy place to stay super close to downtown AVL.",
            },
            {
              overall: 5,
              spotId: 137,
              userId: 4,
              review:
                "The Here FROG was everything I expected and more! The design and layout of the FROG does a fantastic job of giving off a homey and relaxing feeling.     I would recommend this great place to anyone who wants to plan a trip Here. I would love the opportunity to stay here again one day! 12/10",
            },
            {
              overall: 3,
              spotId: 138,
              userId: 9,
              review:
                "Very stylish garage apartment. The two of us (plus our dog) were perfectly comfortable and enjoyed the area immensely.",
            },
            {
              overall: 4,
              spotId: 139,
              userId: 2,
              review:
                "The location was great. Very close to downtown, restaurants and groceries. Matt and Cassie had put together “best of” lists for the area that were very thoughtful. Communication regarding check in and out was thorough and easy to follow.  Unit was clean and had everything we needed. Would stay again!",
            },
            {
              overall: 5,
              spotId: 140,
              userId: 2,
              review:
                "Our stay at the FROG was absolutely fantastic. We eloped in Here and decided to just make it a little vacation as well with our puppy. We had everything we needed. We arrived to a handwritten note from Matt and the space very beautifully decorated and spotless. We wanted for nothing and had all the essentials for cooking as well. We had a six pack of local craft brews waiting for us along with a binder full of laminated ideas and things to do around the Here area. Very close to downtown and South Slope, which definitely check out if you’re a craft beer lover. This is definitely the best Airbnb we’ve stayed in without a doubt and will definitely try to stay again next time we visit AVL! You can’t go wrong staying here!",
            },
            {
              overall: 3,
              spotId: 141,
              userId: 9,
              review:
                "This FROG is such a cozy, well decorated, comfortable place to stay at while exploring Here. Matt & Cassie also leave a very thorough binder of amazing recommendations to do anything from brewery hopping to hiking. Highly recommend staying here to enjoy your trip!",
            },
            {
              overall: 4,
              spotId: 142,
              userId: 2,
              review:
                "Absolutely wonderful to stay here during our wedding at Craggy Gardens! Wouldn’t hesitate to stay here again! Very well decorated and CLEAN! 10 ish minutes to downtown, very convenient!",
            },
            {
              overall: 4,
              spotId: 143,
              userId: 2,
              review:
                "My wife and I genuinely loved this location. It is so cozy and out of the way as well as some how less then ten minutes from everything. I highly recommend staying here.",
            },
            {
              overall: 3,
              spotId: 144,
              userId: 2,
              review:
                "This was our second time staying at Matt and Cassie's and it was just as wonderful as the first time! The location is easy to find and convenient to town. The apartment is really cute and comfortable! We always feel at home there! I would highly recommend it!",
            },
            {
              overall: 5,
              spotId: 145,
              userId: 6,
              review:
                "Will absolutely stay here again. Matt and Cassie were wonderful hosts and even left a little surprise since it was husband's birthday. The space itself was beautiful and convenient to everything we wanted to do.",
            },
            {
              overall: 5,
              spotId: 146,
              userId: 8,
              review:
                "Matt and Cassie had a wonderful area! It was homey, quaint, and a quiet place to rest. It made for a perfect night in and delivery easy.",
            },
            {
              overall: 3,
              spotId: 147,
              userId: 4,
              review:
                "The FROG was spectacular!  Matt & Cassie have done a great job with the space and it was so comfortable.  We truly enjoyed our stay.  The location is great & Matt & Cassie included a binder with ideas for local restaurants, bars, etc. which was so helpful.  They also added a very personal touch by having fresh flowers, a handwritten note & some local beer to enjoy!  If you are planning a trip to Here, do yourself a favor & stay at the FROG.  You won’t be disappointed!!!",
            },
            {
              overall: 4,
              spotId: 148,
              userId: 9,
              review:
                "We’ve been pretty spoiled by Airbnb’s in Here as there are lots of great places to stay, but the FROG really took it to another level and we’ve officially found our favorite spot! Everything has been thoughtfully updated to a modern aesthetic, the neighborhood is quiet but close to downtown and lots of great restaurants, its in a garage apartment so you have all the privacy you could want but are nearby to the owners if anything comes up, Matt and Cassie offered a detailed list of suggestions in town, and as a bonus they are dog friendly! Our pups loved the place as much as we did. Will definitely be recommending this spot to anyone visiting AVL in the future.",
            },
            {
              overall: 3,
              spotId: 149,
              userId: 7,
              review:
                "Great little place, easy access to all parts of the city, really quiet and well kept!",
            },
            {
              overall: 5,
              spotId: 150,
              userId: 9,
              review:
                "Amazing!! Highly recommend!! Info book was super helpful. Bed was super comfortable. Personal touches including welcome note, 6-pack of local beers, info book, and fresh flowers were very much appreciated!",
            },
            {
              overall: 4,
              spotId: 151,
              userId: 8,
              review:
                "The FROG was gorgeous and clean and super comfortable. We would definitely recommend it to anybody looking to visit Here!!",
            },
            {
              overall: 3,
              spotId: 152,
              userId: 6,
              review:
                "The FROG is amazing. Very well thought out and beautifully decorated. It’s above the garage with your own entry so it feels like your own secluded apartment. Close to everything. Bed is sooooo comfortable we asked for a later check out just to enjoy it longer. Matt & Cassie are great hosts. They had a 6 pak of local craft beers waiting in the fridge! Highly recommend for couples. We can’t wait to come back!",
            },
            {
              overall: 5,
              spotId: 153,
              userId: 10,
              review:
                "Matt and Cassie's place is everything you hope for in an Airbnb and somehow looks even better in real life! The location is excellent - tucked away in a really cozy neighborhood just a couple minutes from the downtown experience, their place is exceptionally cool and stylish and makes you want to not leave. When you do leave, you don't have to go far for some excellent local coffee up the street, DELICIOUS pizza and beer across the road from the neighborhood, or the big draws downtown. Their binder is extremely thoughtful; this local guide they put together lists very helpful suggestions for all the kinds of food and entertainment you would want to know about!Our stay was perfect! Do not pass this place up, you won't be sorry you stayed!",
            },
            {
              overall: 5,
              spotId: 154,
              userId: 10,
              review:
                "We stayed at the FROG for our honeymoon and could not have asked for a more perfect place to stay. It is truly an Here gem! Just a 10 minute drive to downtown and walking distance to so many great restaurants. We drove from Chicago and arrived late, but Matt and Cassie had laid out check-in instructions that were easy to follow. The FROG was so clean, beautiful (I want that kitchen in my home!) and cozy. There isn’t a detail that Matt and Cassie missed - from a sweet welcome note to some local brews in the fridge to a binder full of recommendations on where to eat, hike and everything in between. We highly recommend staying at the FROG! We were blown away and will definitely be back!",
            },
            {
              overall: 3,
              spotId: 155,
              userId: 8,
              review:
                "We had a wonderful stay at the FROG! We were only there for one night and wish we could’ve stayed longer. Clean, beautiful and so comfortable. Will definitely be back next year!",
            },
            {
              overall: 5,
              spotId: 156,
              userId: 9,
              review:
                "The FROG an excellent place in a great location. We felt comfortable and relaxed. We appreciated the attention to details and the clear explantions for check in and check out. While we were only there for one night this time, we will be back. Thanks Matt and Cassie!",
            },
            {
              overall: 3,
              spotId: 157,
              userId: 8,
              review:
                "We absolutely LOVED our stay at the Here FROG. The space is super comfy and very stylish. The bed and pillows were extra comfortable. It is easy to tell that Matt  and Cassie spent a lot of time and energy in creating a very aesthetically pleasing and functionally appealing home away from home. It's in a great location and check in was a breeze. We want to come back and stay here every time we visit Here.",
            },
            {
              overall: 4,
              spotId: 158,
              userId: 2,
              review:
                "The FROG was one of the best Airbnb’s we’ve stayed at. It was super stylish, spotless, and located in a cute neighborhood. We loved the little touches, like the welcome note, 6-pack of beers, and recommendations of dog-friendly restaurants and breweries. Great access to the Blue Ridge Parkway and Downtown Here. Would definitely recommend this Airbnb to anyone staying in Here.",
            },
            {
              overall: 4,
              spotId: 159,
              userId: 7,
              review:
                "Matt and Cassie’s Place was awesome. It was close to so many things we wanted to do and felt safe, quiet, and comfortable. They left an extensive guide with suggestions and a sweet welcome gift. We’ll definitely be staying again when we return!!! Thanks!!",
            },
            {
              overall: 4,
              spotId: 160,
              userId: 6,
              review:
                "We LOVED our stay here!  The space is super cozy and in a great location.  Check in was a breeze and the space had everything we needed. We’d definitely stay here again!",
            },
            {
              overall: 4,
              spotId: 161,
              userId: 9,
              review: "Loved the FROG! So clean and welcoming!",
            },
            {
              overall: 4,
              spotId: 162,
              userId: 10,
              review:
                "We thoroughly enjoyed our stay with Matt and Cassie. The place was fantastic, really stylish and comfortable, and the little touches, including some welcome local beers in the fridge, were really welcome. Can’t wait to visit again!",
            },
            {
              overall: 4,
              spotId: 163,
              userId: 3,
              review:
                "This place is a gem! The apartment was clean and comfy and beautifully decorated, we didn’t want to leave. Centrally located with wonderful hosts. Thank you, we had a wonderful stay and we will definitely be back!",
            },
            {
              overall: 3,
              spotId: 164,
              userId: 9,
              review:
                "Love the thought put into the FROG! Wish we could’ve stayed longer, but can’t wait to come back!",
            },
            {
              overall: 4,
              spotId: 165,
              userId: 10,
              review:
                "BEST AIR BNB EVER. Seriously. The house is perfect. The bed was so comfy and soft. The beer in the fridge was a great touch. Their binder of advice is the BEST!!! We used all their recommendations and ate the greatest food! I wish every air bnb was like this!",
            },
            {
              overall: 4,
              spotId: 166,
              userId: 5,
              review:
                "Very cozy, clean, and had all we needed for a weekend away from home. Would definitely stay again!",
            },
            {
              overall: 3,
              spotId: 167,
              userId: 9,
              review:
                "This is the best Airbnb I have ever stayed in! I will be back!",
            },
            {
              overall: 4,
              spotId: 168,
              userId: 4,
              review: "Great Place.",
            },
            {
              overall: 3,
              spotId: 169,
              userId: 10,
              review:
                "Loved staying here. Matt made sure everything was seamless - from checking in with the door code, reserved parking space to curating the perfect Here experience in his guidebook. The bed was extremely comfortable. And, we had everything we needed!",
            },
            {
              overall: 5,
              spotId: 170,
              userId: 9,
              review:
                "FROG is cozy, comfortable, spotlessly clean and conveniently located.  The apartment is the perfect size space for two and is decorated stylishly while managing to feel like home. We are familiar with Here but found Matt's book of recommendations helpful and informative - the section on the neighborhood was especially interesting to my husband and fun to read.  The personal touches: the welcome note and gift, the Christmas Tree (!), the wonderful scents and the up-to-date electronics were much appreciated.  I highly recommend FROG and it will be our preferred location for all of our Here trips to come.  Thanks Matt and FROG for a great few days.",
            },
            {
              overall: 5,
              spotId: 171,
              userId: 3,
              review:
                "What an awesome retreat!  The thoughtful touches and hospitality were amazing and much appreciated.  Great place and great location!  We can’t wait visit again.",
            },
            {
              overall: 4,
              spotId: 172,
              userId: 10,
              review:
                "Matt went above and beyond to make our stay comfortable! Can’t recommend his place enough. We hope to be back soon!",
            },
            {
              overall: 5,
              spotId: 173,
              userId: 9,
              review:
                "Staying at the FROG was an awesome experience. Right when we opened the door after a clear and detailed check-in, we knew we would have a great stay. The FROG was clean, tastefully decorated, and comfortable. The complimentary local brews in the fridge was a nice touch. The book Matt created with what to do in Here was very helpful, and we appreciated the insight. Matt was easy to get ahold of when we had a question as well. Highly recommended!",
            },
            {
              overall: 3,
              spotId: 174,
              userId: 9,
              review:
                "The FROG is the place to be. We loved our stay at Matt’s place in Here. The place is thoughtfully decorated with personal touches. Each piece of art has meaning. We also loved the guidebook! Matt’s recommendations were perfect and based on his recommendations we walked to Here Pizza and Brewing, which was one of the best parts of our trip (we got tickets to watch Love Actually at it’s full movie theater where you can eat good food and drink good beer). The location is fantastic, and parking is available. You have to bike or Uber to downtown because it’s not really walkable, but that’s okay. Highly recommend!",
            },
            {
              overall: 3,
              spotId: 175,
              userId: 5,
              review:
                "Apartment was chic, clean & comfortable! Easy check in & out. Great amenities & kitchen!",
            },
            {
              overall: 4,
              spotId: 176,
              userId: 2,
              review:
                "Matt made our stay so enjoyable with his thoughtful touches and all the excellent info in his guidebook. Perfect location. Made us fall in love with Here even more!",
            },
            {
              overall: 5,
              spotId: 177,
              userId: 3,
              review:
                "Matt’s place was fabulous!  It’s in a quiet neighborhood but easily accessible to all Here has to offer.  The space is stylish yet homey/comfy and loaded with thoughtful/clever special touches. Matt’s attention to detail is extraordinary!",
            },
            {
              overall: 4,
              spotId: 178,
              userId: 5,
              review:
                "Stay at the FROG! Downtown is about 1 mile from here, great space, quiet, etc.",
            },
            {
              overall: 5,
              spotId: 179,
              userId: 4,
              review:
                "Matt's spot was spotless & SUPER close to everything! We will DEFINITELY be back!",
            },
            {
              overall: 4,
              spotId: 180,
              userId: 10,
              review:
                "Had a wonderful stay in Here here!  The place is immaculate, well-appointed,  comfortable and cozy. Matt is an exceptional host - will definitely be back!",
            },
            {
              overall: 4,
              spotId: 181,
              userId: 4,
              review:
                "We loved Matt’s place. The style and materials were modern and up to date. The location was perfect to get to everything we wanted to see in under 10 minutes!  Matt was super friendly and welcoming!  We would definitely recommend the FROG and stay here again!",
            },
            {
              overall: 4,
              spotId: 182,
              userId: 4,
              review:
                "The FROG is a great place to stay! If you’re looking for a spot that is easy to get to and within a short drive to all that fun things Here has to offer, this is where you should stay! Also, if you have a dog really cool hiking trails near by. The welcome book and suggestions were greatly appreciated. 10/10",
            },
            {
              overall: 3,
              spotId: 183,
              userId: 5,
              review:
                "If you are visiting Here then you have just found your place to stay! Just outstanding!",
            },
            {
              overall: 3,
              spotId: 184,
              userId: 8,
              review:
                "The FROG was one of our favorite places we have stayed while visiting Here! It was convenient to downtown with a short drive and walkable to great places like Here Brewing. We would definitely stay here again!",
            },
            {
              overall: 3,
              spotId: 185,
              userId: 10,
              review:
                "Absolutely beautiful place! Very coolneighborhood! Would definitely come back",
            },
            {
              overall: 4,
              spotId: 186,
              userId: 10,
              review:
                "Our stay in the FROG was amazing! It’s a great location and so cozy. Would love to stay here again. Highly recommend!",
            },
            {
              overall: 3,
              spotId: 187,
              userId: 6,
              review:
                "I stayed at the Frog for five nights so I really needed a place that felt like home.  It really was perfect.  I loved taking walks through the neighborhood and the close proximity to downtown.  I have already booked a return trip.",
            },
            {
              overall: 4,
              spotId: 188,
              userId: 4,
              review:
                "This place is amazing and you’ll feel at home, it’s one of the most coziest airbnb I’ve ever stayed in.",
            },
            {
              overall: 5,
              spotId: 189,
              userId: 7,
              review:
                "I was very happy with my stay! The Frog is so cute and comfortable with easy access to all parts of Here. Would highly recommend.",
            },
            {
              overall: 5,
              spotId: 190,
              userId: 8,
              review:
                "I couldn't have hoped for a better experience. Location was perfect for downtown Here.  The place was immaculate and exceeded all expectations. The welcome book and suggestions added a lot of value to our trip.",
            },
            {
              overall: 3,
              spotId: 191,
              userId: 9,
              review:
                "The Frog is a great place to stay.  Comfortable, clean, stylish, private.  Wonderful to have a parking space,  the neighborhood was great for walking my dog around, the atmosphere was welcoming and friendly.  Matt leaves excellent information & recommendations for outdoor activities, restaurants and breweries.  He is extremely available,  and a pleasure to chat with the one time I ran into him in the driveway.  All necessary amenities are available, no need to get anything but groceries while staying at the Frog.  Matt even leaves a 6 pack of a local brew in the fridge to enjoy...extremely thoughtful.  Not only do I recommend staying at the Frog, but will definitely try to book again when back in Here!!",
            },
            {
              overall: 3,
              spotId: 192,
              userId: 3,
              review:
                "Perfect place to stay if you are visiting! The FROG has so many incredible details and a feel that just invites you in and makes you never want to leave! Matt was very easy to communicate with, left us a sweet welcome note, and treat in the fridge. Highly recommend!",
            },
            {
              overall: 3,
              spotId: 193,
              userId: 2,
              review:
                "This was our second time staying here at the Frog and it was wonderful. We are so happy to have found this perfect home in a prime location and plan to keep returning!",
            },
            {
              overall: 5,
              spotId: 194,
              userId: 4,
              review:
                "We loved staying at the FROG. Matt is a friendly, thoughtful host, and his space is incredibly stylish and comfortable. There were plenty of thoughtful touches, from the designated guest parking space to the detailed local guidebook and even a six pack of beer from Here breweries in the fridge! Check-in and check-out couldn't have been easier, and we had everything we needed for our visit. We would absolutely stay here again!",
            },
            {
              overall: 4,
              spotId: 195,
              userId: 6,
              review:
                "Beyond fabulous in every way.  Walkable to restaurants and stores,  your own parking place!.  Full, designer kitchen.  Bathroom all new.  Best treetop views ever from everywhere in apartment.  We are going to return often.",
            },
            {
              overall: 3,
              spotId: 196,
              userId: 4,
              review: "Great spot!",
            },
          ],
      
        {}
      );
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Reviews', null, {});

  }
};
