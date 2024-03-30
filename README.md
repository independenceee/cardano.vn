# Đối với tabs videos

thực hiện import video vào trong trang web cần sử dụng components sau đó nhập url để thực hiện đọc dữ liệu mà components sử dụng

trong đó url chính là phần sau của `https://sheets.googleapis.com/v4/spreadsheets` + `/1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU/values/youtube?key=AIzaSyBm44VZa9sLj5PpaWty_UCWzykTUbxy2js`

url chính là `/1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU/values/youtube?key=AIzaSyBm44VZa9sLj5PpaWty_UCWzykTUbxy2js`

```tsx
import VideoList from "@site/components/apps/VideoList";

<VideosList url="" />;
```

# Sử dụng phần Tabs Để sửa dụng phần tabs cần thực hiện

import các component của phần tabs và để sử dụng các component được sau đó đồng thời khai báo các dữ liệu để hiện thi ra giao diện

```jsx
import Courses from "@site/src/components/theme/Courses";
import courses from "@site/src/data/courses"; // dữ liệu
<Courses courses={courses} />;
```

Đồng thời trong các phần của `courses.ts` khai cáo các component để hiển thị cho phần tabs
với `name` là tên tabs `Children` là components muốn chèn vào để sử dụng

```ts
const courses: CourseType[] = [
    // Tabs 1 : Hiển thị ác thành phần về thấu hiểu cardano
    {
        id: 1,
        name: "Thấu hiểu cardano",
        Children: function () {
            return (
                <ul className={cx("video-list")}>
                    {Thau_Hieu_Cardano.map(({ id, name, url }) => (
                        <a href={url} key={id} className={cx("video-item-wrapper")}>
                            <span className={cx("box")} />
                            <span>{name}</span>
                        </a>
                    ))}
                </ul>
            );
        },
    },
    // Tabs 2 : Hiển thị ác thành phần về Smartcontract
    {
        id: 2,
        name: "Smart Contract",
        Children: function () {
            return (
                <ul className={cx("video-list")}>
                    {Smart_Contract.map(({ id, name, url }) => (
                        <li key={id} className={cx("video-item-wrapper")}>
                            <span className={cx("box")} />
                            <span>{name}</span>
                        </li>
                    ))}
                </ul>
            );
        },
    },
    // Tabs 3 : Hiển thị ác thành phần về Tin tức cộng đồng
    {
        id: 3,
        name: "Tin tức & Cộng đồng",
        Children: function () {
            return (
                <ul className={cx("video-list")}>
                    {Tin_Tuc_Va_Cong_Dong.map(({ id, name, url }) => (
                        <li key={id} className={cx("video-item-wrapper")}>
                            <span className={cx("box")} />
                            <span>{name}</span>
                        </li>
                    ))}
                </ul>
            );
        },
    },

    // Tabs 4 : Hiển thị ác thành phần về Bình luận
    {
        id: 4,
        name: "Bình luận",
        Children: function () {
            return (
                <ul className={cx("video-list")}>
                    <GiscusComponent />
                </ul>
            );
        },
    },

    // Tabs 5 : Hiển thị ác thành phần về Audio
    {
        id: 5,
        name: "Audio",
        Children: function () {
            return (
                <ul className={cx("video-list")}>
                    <AudioList sheetId="1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU" sheetName="audio" range="A1:G5" />
                </ul>
            );
        },
    },
    // Tabs 6 : Hiển thị ác thành phần về Tabs Sheets
    {
        id: 6,
        name: "Table Sheet",
        Children: function () {
            return (
                <ul className={cx("video-list")}>
                    <TableSheet className={cx("table")} sheetId="1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU" sheetName="table" range="A1:G5" />
                </ul>
            );
        },
    },

    // Tabs 3 : Hiển thị ác thành phần về Video
    {
        id: 7,
        name: "Videos",
        Children: function () {
            const [videoURL, setVideoURL] = useState<string>("https://www.youtube.com/embed/UiY5-ycvM7w?si=Uc9PB7KaWDP7ddpe");
            const handleShowVideo = function (src: string) {
                setVideoURL(convertIframe(src));
            };

            const [videos, setVideos] = useState<any>([]);
            useEffect(function () {
                (async function () {
                    try {
                        const response = await axios.get(
                            "https://sheets.googleapis.com/v4/spreadsheets/1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU/values/youtube?key=AIzaSyBm44VZa9sLj5PpaWty_UCWzykTUbxy2js",
                        );

                        const data = response.data;

                        const playlist = data.values.slice(1).map((row, rowIndex) => {
                            return {
                                key: rowIndex.toString(),
                                date: row[0],
                                title: row[1],
                                link: row[2],
                                abstract: row[3],
                            };
                        });

                        console.log(playlist);
                        setVideos(playlist);
                    } catch (error) {
                        console.log(error);
                    }
                })();
            }, []);
            return (
                <ul className={cx("video-list")}>
                    <section className={cx("courses-right")} data-aos="fade-left">
                        <div className={cx("video-wrapper")}>
                            <iframe
                                className={cx("video")}
                                src={videoURL}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen={false}
                            />
                        </div>
                        <div className={cx("courses-right-list")}>
                            <ul className={cx("video-list")}>
                                {videos.map(function ({ title, link }, index: number) {
                                    console.log(link);
                                    return (
                                        <li key={index} onClick={() => handleShowVideo(link)} className={cx("video-item-wrapper")}>
                                            <span className={cx("box")} />
                                            <span>{title}</span>
                                            <span className={cx("play-icon-wrapper")}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    width={20}
                                                    height={20}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                                                    />
                                                </svg>
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </section>
                </ul>
            );
        },
    },
];
```

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
