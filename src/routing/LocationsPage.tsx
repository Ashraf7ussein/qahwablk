import { FaLocationArrow } from "react-icons/fa6";

const locations = [
  {
    enName: "Zarqa Autostrad",
    location:
      "https://www.google.com/maps/place/Qahwa+BLK+Autostrad+%7C+%D9%82%D9%87%D9%88%D8%A9+%D8%A8%D9%84%D8%A7%D9%83+-+%D8%A7%D9%84%D8%A3%D9%88%D8%AA%D9%88%D8%B3%D8%AA%D8%B1%D8%A7%D8%AF%E2%80%AD/@32.0416715,36.0938146,17z/data=!3m1!4b1!4m6!3m5!1s0x151b6582497a1447:0xb9cb6b226430a94d!8m2!3d32.0416715!4d36.0938146!16s%2Fg%2F11vyry_yf8?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    enName: "Al Yasmin 5B mall",
    location:
      "https://www.google.com/maps/place/Qahwa+BLK+-+Al+Yasmin+%7C+%D9%82%D9%87%D9%88%D8%A9+%D8%A8%D9%84%D8%A7%D9%83+-+%D8%A7%D9%84%D9%8A%D8%A7%D8%B3%D9%85%D9%8A%D9%86%E2%80%AD/@31.9187127,35.9060402,17z/data=!3m1!4b1!4m6!3m5!1s0x151ca1a6fc038aab:0x64777918d0550a31!8m2!3d31.9187127!4d35.9060402!16s%2Fg%2F11vjx5q4r8?hl=en-JO&entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    enName: "Khalda",
    location:
      "https://www.google.com/maps/place/Qahwa+BLK+-+Khalda+Branch+%7C+%D9%82%D9%87%D9%88%D8%A9+%D8%A8%D9%84%D8%A7%D9%83+%D8%AE%D9%84%D8%AF%D8%A7%E2%80%AD/@31.9972124,35.7696493,13z/data=!4m7!3m6!1s0x151ca1052d9f57ab:0x6ab81fd754369455!8m2!3d31.9972124!4d35.845867!15sChNraGFsZGEgbG9jYXRpb24gYmxrWhUiE2toYWxkYSBsb2NhdGlvbiBibGuSAQtjb2ZmZWVfc2hvcOABAA!16s%2Fg%2F11sv_yhmct?hl=en-GB&entry=tts&shorturl=1",
  },
  {
    enName: "7th Circle",
    location:
      "https://www.google.com/maps?q=Qahwa+BLK+-+7th+Circle+%7C+%D9%82%D9%87%D9%88%D8%A9+%D8%A8%D9%84%D8%A7%D9%83+-+%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B9,+Al-Mawaddah+St.,+Amman,+Jordan&ftid=0x151ca1f9513e3075:0xf8ef4072a9a8b00a&hl=en-US&gl=us&entry=gps&lucs=47062720&g_ep=CAISBjYuNTYuMhgAINeCAyoINDcwNjI3MjBCAkFF&g_st=iw",
  },
  {
    enName: "Sport City",
    location:
      "https://www.google.com/maps/place/Qahwa+BLK+-+Sport+City+%7C+%D9%82%D9%87%D9%88%D8%A9+%D8%A8%D9%84%D8%A7%D9%83+%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A9%E2%80%AD/@31.9900024,35.908364,17.43z/data=!4m5!3m4!1s0x0:0x1f203303974302aa!8m2!3d31.9899322!4d35.9099925?shorturl=1",
  },
  {
    enName: "Abdoun",
    location:
      "https://www.google.com/maps/place//data=!4m2!3m1!1s0x151ca1293a66dd07:0xa553cbdaaa325b76?source=g.page.share",
  },
  {
    enName: "Abdali Boulevard",
    location:
      "https://www.google.com/maps/place/Qahwablk+-+Abdali+Boulevard/@31.9642105,35.9030971,17z/data=!3m1!4b1!4m5!3m4!1s0x151ca121f216474d:0x9e308abf951393b4!8m2!3d31.9642105!4d35.9052858?shorturl=1",
  },
  {
    enName: "Fuheis",
    location:
      "https://www.google.com/maps/place/QahwaBLK+Fuhais+-+%D9%82%D9%87%D9%88%D8%A9+%D8%A8%D9%84%D8%A7%D9%83+%D9%81%D8%B1%D8%B9+%D8%A7%D9%84%D9%81%D8%AD%D9%8A%D8%B5%E2%80%AD/@32.0015688,35.7793565,17z/data=!3m1!4b1!4m5!3m4!1s0x151ca3c4e4755081:0xdf5106ae3e5f6457!8m2!3d32.0015688!4d35.7815452?shorturl=1",
  },
  {
    enName: "KIA Town Showroom",
    location:
      "https://www.google.com/maps/place/Qahwa+BLK+-+Kia+Showroom+%7C+%D9%82%D9%87%D9%88%D8%A9+%D8%A8%D9%84%D8%A7%D9%83+-+%D9%83%D9%8A%D8%A7+%D9%85%D9%88%D8%AA%D9%88%D8%B1%D8%B2%E2%80%AD/@31.9433179,35.8481131,17z/data=!3m1!4b1!4m5!3m4!1s0x151ca1c6210dd09f:0xfd62caa154f79a34!8m2!3d31.9433179!4d35.8481131?coh=164777&entry=tt&shorturl=1",
  },
  {
    enName: "New Zarqa",
    location:
      "https://www.google.com/maps/place/Qahwa+BLK+-+New+Zarqa+%7C+%D9%82%D9%87%D9%88%D8%A9+%D8%A8%D9%84%D8%A7%D9%83+%D8%A7%D9%84%D8%B2%D8%B1%D9%82%D8%A7%D8%A1+%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9%E2%80%AD/@32.0971875,36.0873125,17z/data=!3m1!4b1!4m5!3m4!1s0x151b7b111f2eca7f:0x556673d776facec4!8m2!3d32.0971875!4d36.0873125?coh=164777&entry=tt&shorturl=1",
  },
  {
    enName: "Abdoun Circle",
    location:
      "https://www.google.com/maps?q=WVXR+HJX+Qahwa+BLK+-+Abdoun+Circle+%7C+%D9%82%D9%87%D9%88%D8%A9+%D8%A8%D9%84%D8%A7%D9%83+-+%D8%AF%D9%88%D8%A7%D8%B1+%D8%B9%D8%A8%D8%AF%D9%88%D9%86,+Amman&ftid=0x151ca1667c9f0f27:0x2679fc22d2a7703a&entry=gps&lucs=,94242529,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISDTYuMTM1LjEuODcwOTAYACCs3wEqYyw5NDI0MjUyOSw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICSk8%3D&g_st=iw",
  },
  {
    enName: " Swefieh",
    location:
      "https://www.google.com/maps?q=Qahwa+BLK+-+Swefieh+%7C+%D9%82%D9%87%D9%88%D8%A9+%D8%A8%D9%84%D8%A7%D9%83+%D9%81%D8%B1%D8%B9+%D8%B5%D9%88%D9%8A%D9%81%D9%8A%D8%A9,+Youssef+Al-Farra+St.,+Amman&ftid=0x151ca170e79f0c6b:0x7c4065712cf5dc00&entry=gps&lucs=,94242529,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISDTYuMTM1LjEuODcwOTAYACCs3wEqYyw5NDI0MjUyOSw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICSk8%3D&g_st=iw",
  },
  {
    enName: "Irbid Wasfi Al-Tal St",
    location:
      "https://www.google.com/maps?q=Qahwa+BLK+-+Irbid+Wasfi+Al-Tal+St.+-+(%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D8%A8%D9%88+%D8%B1%D8%A7%D8%B4%D8%AF)+%D9%82%D9%87%D9%88%D8%A9+%D8%A8%D9%84%D8%A7%D9%83+-+%D8%A5%D8%B1%D8%A8%D8%AF+%D8%B4.+%D9%88%D8%B5%D9%81%D9%8A+%D8%A7%D9%84%D8%AA%D9%84,+Wasfi+At-Tal+St.,+Irbid&ftid=0x151c77f06280723d:0xc4dc11743b08062c&entry=gps&lucs=,94242529,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISDTYuMTM5LjAuOTA4MzAYACCs3wEqYyw5NDI0MjUyOSw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICSk8%3D&g_st=com.google.maps.preview.copy",
  },
  {
    enName: "Ahliyeh University",
    location:
      "https://www.google.com/maps?q=Qahwa+BLK+-+Ahliyeh+University+%7C+%D9%82%D9%87%D9%88%D8%A9+%D8%A8%D9%84%D8%A7%D9%83+%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%B9%D9%85%D8%A7%D9%86+%D8%A7%D9%84%D8%A3%D9%87%D9%84%D9%8A%D8%A9,+Amman+25989&ftid=0x151c9924d49cb433:0xf7896902a3f06950&entry=gps&lucs=,94242529,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISDTYuMTM1LjEuODcwOTAYACCs3wEqYyw5NDI0MjUyOSw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICSk8%3D&g_st=com.google.maps.preview.copy",
  },
  {
    enName: "Jordan University",
    location:
      "https://www.google.com/maps/place/Qahwa+BLK/@32.0163978,35.8713128,11z/data=!4m7!3m6!1s0x151c9f007f0179d7:0xcb6b972cea9dc5d5!8m2!3d32.0163361!4d35.8713359!15sCh1xYWh3YWJsayB1bml2ZXJzaXR5IG9mIGpvcmRhbpIBC2NvZmZlZV9zaG9w4AEA!16s%2Fg%2F11wx8dr8t6!5m1!1e1?entry=tts&g_ep=EgoyMDI1MDQwMi4xIPu8ASoASAFQAw%3D%3D&skid=e4f7eb1f-111a-48b7-b27d-d054f814882c",
  },
  {
    enName: "JUST University",
    location:
      "https://www.google.com/maps?q=Qahwa+BLK+-+JUST+University+%7C+%D9%82%D9%87%D9%88%D8%A9+%D8%A8%D9%84%D8%A7%D9%83+-+%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85+%D9%88%D8%A7%D9%84%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7,+Jordan+University+of+Science+%26+Technology,+Irbid&ftid=0x151b890078636f8d:0xdd1bbec3cdc4af65&entry=gps&lucs=,94242529,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISDTYuMTM5LjAuOTA4MzAYACCIJypjLDk0MjQyNTI5LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjAzMDE5LDQ3MDg0MzA0LDk0MjA4NDU4LDk0MjA4NDQ3QgJKTw%3D%3D&g_st=com.google.maps.preview.copy",
  },
  {
    enName: "Jordan University Dustour St",
    location:
      "https://www.google.com/maps/place/Qahwa+BLK+-+University+1+%7C+1+%D9%82%D9%87%D9%88%D8%A9+%D8%A8%D9%84%D8%A7%D9%83+-+%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9%E2%80%AD/@31.9982996,35.8762815,17z/data=!3m1!4b1!4m6!3m5!1s0x151ca1007bcb66f1:0x73767f7988ee57c4!8m2!3d31.9982951!4d35.8811524!16s%2Fg%2F11wmys2_bm?entry=tts&g_ep=EgoyMDI0MTIxMS4wIPu8ASoASAFQAw%3D%3D",
  },
  {
    enName: "Jordan University 2",
    location:
      "https://www.google.com/maps/place/Qahwa+BLK+-+University+2+%7C+%D9%82%D9%87%D9%88%D8%A9+%D8%A8%D9%84%D8%A7%D9%83+-+%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D9%A2%E2%80%AD/@32.0006999,35.8745958,17z/data=!3m1!4b1!4m6!3m5!1s0x151c9f121d0e9f61:0x98c3d2cafe4a9f61!8m2!3d32.0006999!4d35.8771707!16s%2Fg%2F11wnn0lprb?entry=tts&g_ep=EgoyMDI1MDEyOS4xIPu8ASoASAFQAw%3D%3D",
  },
  {
    enName: "Hashmite University",
    location:
      "https://www.google.com/maps?q=32.1053099,36.1868425&entry=gps&lucs=,94203325,47075489,94216425,94216401,94249908,94244543,94246480,94242610,94224825,94227247,94227248,94247554,47071704,47069508,94218641,94228354,94233079,94203019,47084304,94208458,94208447&g_ep=CAISEjI0LjUwLjAuNzA0NDI3ODkxMBgAINeCAyq9ASw5NDIwMzMyNSw0NzA3NTQ4OSw5NDIxNjQyNSw5NDIxNjQwMSw5NDI0OTkwOCw5NDI0NDU0Myw5NDI0NjQ4MCw5NDI0MjYxMCw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw5NDI0NzU1NCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIyODM1NCw5NDIzMzA3OSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICSk8%3D&g_st=iw",
  },
  {
    enName: "Airport Incoming",
    location:
      "https://www.google.com/maps/place/32%C2%B006'19.1%22N+36%C2%B011'12.6%22E/@32.1053099,36.1842676,17z/data=!3m1!4b1!4m4!3m3!8m2!3d32.1053099!4d36.1868425?entry=tts&g_ep=EgoyMDI0MTIxMS4wIPu8ASoASAFQAw%3D%3D",
  },
  {
    enName: "AL Bayader",
    location:
      "https://www.google.com/maps/place/Qahwa+BLK+-+AL+Bayader+%7C+%D9%82%D9%87%D9%88%D8%A9+%D8%A8%D9%84%D8%A7%D9%83+-+%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D8%AF%D8%B1%E2%80%AD/@31.9548029,35.8350494,17z/data=!3m1!4b1!4m6!3m5!1s0x151ca1004682fc61:0x9bcc93474faa3a2f!8m2!3d31.9548029!4d35.8350494!16s%2Fg%2F11wx30l3lb?sa=X&ved=1t:2428&ictx=111&entry=tts&g_ep=EgoyMDI1MDEyOS4xIPu8ASoASAFQAw%3D%3D",
  },
  {
    enName: "Total Isra’a Airport Rd",
    location:
      "https://www.google.com/maps?q=Qahwa+BLK+-+Total+Isra%E2%80%99a+Airport+Rd.+%7C+%D9%82%D9%87%D9%88%D8%A9+%D8%A8%D9%84%D8%A7%D9%83+-+%D8%AA%D9%88%D8%AA%D8%A7%D9%84+%D8%A7%D9%84%D8%A5%D8%B3%D8%B1%D8%A7%D8%A1+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D9%85%D8%B7%D8%A7%D8%B1,+%D8%AA%D9%88%D8%AA%D8%A7%D9%84+%D8%A7%D9%84%D8%A5%D8%B3%D8%B1%D8%A7%D8%A1,+Airport+Rd.,+Amman&ftid=0x151ca9aa4ae1bcd5:0x78a410c5d8bbfd84&entry=gps&lucs=,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISEjI1LjE0LjEuNzQyMzk4MTI0MBgAIIgnKmMsOTQyMjQ4MjUsOTQyMjcyNDcsOTQyMjcyNDgsOTQyMzExODgsNDcwNzE3MDQsNDcwNjk1MDgsOTQyMTg2NDEsOTQyMDMwMTksNDcwODQzMDQsOTQyMDg0NTgsOTQyMDg0NDdCAkpP&skid=381dc1a3-6c58-4d3d-a720-2ff4b6d79316&g_st=iw",
  },
  {
    enName: "Hurya St - Almanaseer Gas Station",
    location:
      "https://www.google.com/maps/place/Almanaseer+gas+station+%D9%83%D8%A7%D8%B2%D9%8A%D9%87+%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%B5%D9%8A%D8%B1+%D9%84%D9%84%D9%85%D8%AD%D8%B1%D9%88%D9%82%D8%A7%D8%AA%E2%80%AD/@31.8995832,35.9075897,12.7z/data=!4m6!3m5!1s0x151b59f9a911150b:0x62f9a34942ac936d!8m2!3d31.8960075!4d35.9164142!16s%2Fg%2F11t6xp7rjm!5m1!1e1?entry=tts&g_ep=EgoyMDI1MDQwMi4xIPu8ASoASAFQAw%3D%3D&skid=535e01e9-6b78-47a6-89bc-a0d36f985f0f",
  },
];

const LocationsPage = () => {
  return (
    <div className="w-full mt-30 max-w-screen-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Locations</h2>
      <div className="flex flex-col gap-4">
        {locations.map((loc, index) => (
          <a
            key={index}
            href={loc.location}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "rgb(42, 50, 53)" }}
            className="flex items-center justify-between p-4 rounded-lg duration-300 hover:scale-105 transition w-full text-sm sm:text-base"
          >
            <span className="truncate">{loc.enName}</span>
            <FaLocationArrow className="text-white flex-shrink-0 ml-2" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default LocationsPage;
