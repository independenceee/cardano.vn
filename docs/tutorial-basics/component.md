---
sidebar_position: 1
---

# sử dụng component

## lấy google api key

[Xem Bài Hướng Dẫn để lấy được google api key](https://handsondataviz.org/google-sheets-api-key.html)

sau đó chỉnh sửa ở file docusarus.config.ts
![](https://i.imgur.com/OuuznxX.png)

## Nhúng Table

sheetId là đoạn bôi đen của url
![](https://i.imgur.com/LILLXhV.png)

sheetName là tên của tab
![](https://i.imgur.com/hgqhFx4.png)

range là khoảng ô , mặc định A1:Z1000

```jsx
import TableSheet from "@site/src/components/app/TableSheet";

<TableSheet sheetId="1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU" sheetName="table" range="A1:G5" />;
```

### Kết Quả :

import TableSheet from "@site/src/components/app/TableSheet";

<TableSheet sheetId="1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU"  sheetName="table" range="A1:G5"/>

## Nhúng List Audio

```jsx
import AudioList from "@site/src/components/app/AudioList";

<AudioList sheetId="1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU" sheetName="audio" range="A1:G5" />;
```

## Kết Quả :

import AudioList from "@site/src/components/app/AudioList";

<AudioList sheetId="1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU"  sheetName="audio" range="A1:G5"/>

## Nhúng một Audio

```jsx
import AudioPlayer from "@site/src/components/app/AudioPlayer";

<AudioPlayer link="https://cardano.vn/audios/podcast/20231017_summary_False_Cardano_Narratives_Are_At_It_Again.mp3" />;
```

## kết quả

import AudioPlayer from "@site/src/components/app/AudioPlayer";

<AudioPlayer link="https://cardano.vn/audios/podcast/20231017_summary_False_Cardano_Narratives_Are_At_It_Again.mp3" />

## Nhúng một About

trong đó url là link youtube,
title, subtitle, description, firstTask, secondTask, thirdTask là các thông tin cần hiển thị

```tsx
import About from "@site/src/components/app/About";

<About
    url="https://www.youtube.com/watch?v=ojiGKxIKrWw"
    title="About Cryptoz"
    subTitle="About Cryptoz We Translate Your Dream Into Reality"
    description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    firstTask="Nemo enim ipsam voluptatem quia voluptas sit aspernatur."
    secondTask="He oluptatem quia voluptas sit aspernatur"
    thirdTask="Nemo enim ipsam voluptatem quia voluptas sit aspernatur"
/>;
```

## kết quả

import About from "@site/src/components/app/About";

<About   
    url="https://www.youtube.com/watch?v=ojiGKxIKrWw"
    title="About Cryptoz"
    subTitle="About Cryptoz We Translate Your Dream Into Reality"
    description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    firstTask="Nemo enim ipsam voluptatem quia voluptas sit aspernatur."
    secondTask="He oluptatem quia voluptas sit aspernatur"
    thirdTask="Nemo enim ipsam voluptatem quia voluptas sit aspernatur"
/>

## Nhúng một Roadmap

### Cách cài đặt

Truyền các title và subTitle đông thời lầ một mảng các title description và date để hiển thị kết quả như hình
Lưu ý có thể thêm bớt phần tử của mảng để có nhiều thông tin hơn

```tsx
import Roadmap from "@site/src/components/app/Roadmap";

<Roadmap
    timelines={[
        {
            id: 1,
            title: "DMM website",
            description: "Build and make DMM website responsive",
            datetime: "Q1/2024",
        },
        {
            id: 2,
            title: "DMM application",
            description: "Mobile native applications: Android & IOS - Omni-channel customer services implementation",
            datetime: "Q2/2024",
        },
        {
            id: 3,
            title: "Tokenomics",
            description: "Seed, Private & Strategic sale - IDO & Listing",
            datetime: "Q3/2024",
        },
        {
            id: 4,
            title: "Preloading on Samsung smartphone",
            description: "Preloading on Samsung smartphone (VN market) - Marketing Automation implementation",
            datetime: "Q4/2024",
        },
    ]}
    title="Roadmap timeline"
    subTitle="Roadmap timeline"
/>;
```

## Kết quả

import Roadmap from "@site/src/components/app/Roadmap";

<Roadmap timelines={[
{
id: 1,
title: "DMM website",
description: "Build and make DMM website responsive",
datetime: "Q1/2024",
},
{
id: 2,
title: "DMM application",
description: "Mobile native applications: Android & IOS - Omni-channel customer services implementation",
datetime: "Q2/2024",
},
{
id: 3,
title: "Tokenomics",
description: "Seed, Private & Strategic sale - IDO & Listing",
datetime: "Q3/2024",
},
{
id: 4,
title: "Preloading on Samsung smartphone",
description: "Preloading on Samsung smartphone (VN market) - Marketing Automation implementation",
datetime: "Q4/2024",
},
]}
title="Roadmap timeline"
subTitle="Roadmap timeline"
/>

## Nhúng một Banner

import Hero from "@site/src/components/app/Hero"

<Hero/>

## Nhúng một TabList

### Cách cài đặt

```tsx
import TabList from "@site/src/components/app/TabList";
import GiscusComponent from "@site/src/components/app/GiscusComponent";
import AudioList from "@site/src/components/app/AudioList";
import TableSheet from "@site/src/components/app/TableSheet";

<TabList
    tabs={[
        {
            id: 4,
            name: "Bình luận",
            Children: function () {
                return <GiscusComponent />;
            },
        },
        {
            id: 6,
            name: "Table Sheet",
            Children: function () {
                return <TableSheet sheetId="1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU" sheetName="table" range="A1:G5" />;
            },
        },
        {
            id: 5,
            name: "Audio",
            Children: function () {
                return <AudioList sheetId="1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU" sheetName="audio" range="A1:G5" />;
            },
        },
    ]}
/>;
```

## Kết quả

import TabList from "@site/src/components/app/TabList";
import GiscusComponent from "@site/src/components/app/GiscusComponent";

<TabList tabs={
[{
id: 4,
name: "Bình luận",
Children: function () {
return (
<GiscusComponent />
);
},
},
{
id: 6,
name: "Table Sheet",
Children: function () {
return (
<TableSheet sheetId="1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU" sheetName="table" range="A1:G5" />
)
},
},
{
id: 5,
name: "Audio",
Children: function () {
return (
<AudioList sheetId="1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU" sheetName="audio" range="A1:G5" />
)
},
},
]} />

## Cách settup video

```tsx
import VideoList from "@site/src/components/app/VideoList";

<VideoList sheetId="1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU" sheetName="youtube" />;
```

sheetId là đoạn bôi đen của url
![](https://i.imgur.com/LILLXhV.png)

sheetName là tên của tab
![](https://i.imgur.com/hgqhFx4.png)

range là khoảng ô , mặc định A1:Z1000

### kết quả

import VideoList from "@site/src/components/app/VideoList";

<VideoList sheetId="1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU" sheetName="youtube" />;

## Cách setup một component Tabs trên giao diện

Thực hiện import các component và đặt vào trong giao diện như trong hinh

![](@site/src/assets/images/image.png)

## Kết quả

import Home from "@site/src/pages/Home";

<Home/>
