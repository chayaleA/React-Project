import axios from 'axios';
import { observable, action, makeObservable, computed, runInAction } from 'mobx';

class Services {
    tempServices = [
        {
        id: "1",
        name: "Chalaka Photos",
        description: "Chalaka photos that will make you happy",
        price: 800,
        seviceMedia: "https://photo.r-t.co.il/wp-content/uploads/2019/12/NEV_3893-Edit-scaled.jpg",
        arrPictures: [{
            img: 'https://sary.co.il/wp-content/uploads/2022/06/%D7%91%D7%99%D7%99%D7%92%D7%9C-%D7%90%D7%94%D7%A8%D7%99.jpg',
        },{
            img: 'https://photo.r-t.co.il/wp-content/uploads/2019/12/NEV_3893-Edit-scaled.jpg',
        },{
            img: 'https://www.prog.co.il/media/%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%97%D7%9C%D7%90%D7%A7%D7%94.80955/full',
        },{
            img: 'https://static.wixstatic.com/media/da19f9_e79a5ae618f54b9e891f962b629c9396~mv2_d_4983_3322_s_4_2.jpg/v1/fill/w_2500,h_1666,al_c/da19f9_e79a5ae618f54b9e891f962b629c9396~mv2_d_4983_3322_s_4_2.jpg',
        },{
            img: 'https://photo.r-t.co.il/wp-content/uploads/2019/12/NEV_2880-Edit-scaled.jpg',
        },{
            img: 'https://reuta-photo.co.il/wp-content/uploads/2022/12/MG_0198-1-scaled.jpg',
        },{
            img: 'https://michalcharlap.com/wp-content/uploads/2023/03/3-37-scaled.jpg',
        },{
            img: 'https://rachelzohar.co.il/wp-content/uploads/2021/07/5U8A9993-scaled.jpg',
        },{
            img: 'https://static.wixstatic.com/media/53a022_62e69be284ee47caab3976e8163b162f~mv2.jpg/v1/fill/w_280,h_280,q_90/53a022_62e69be284ee47caab3976e8163b162f~mv2.jpg',
        },{
            img: 'https://mirihaeshel.com/wp-content/uploads/2023/07/2E4A4644.jpg',
        },{
            img: 'https://www.prog.co.il/media/%D7%97%D7%9C%D7%90%D7%A7%D7%94.116992/full',
        },
        {
            img: 'https://www.prog.co.il/media/%D7%97%D7%9C%D7%90%D7%A7%D7%94.116992/full',
        }],
        duration: 60,
    },
    {
        id: "2",
        name: "New Born Photos",
        description:  "New Born photos that will make you happy",
        price: 800,
        seviceMedia: "https://tzalemet.co.il/wp-content/uploads/2018/04/111-01.jpg",
        duration: 60,
        arrPictures: [{
            img: 'https://studiotzeadim.com/wp-content/uploads/2018/06/%D7%90%D7%A8%D7%9D-2.jpg',
        },
        {
            img: 'https://www.photofairy.co.il/wp-content/uploads/2016/08/2723-s.jpg',
        },
        {
            img: 'https://www.saramoyal.co.il/wp-content/uploads/2023/03/007_4.jpg',
        }, {
            img: 'https://sary.co.il/wp-content/uploads/2022/06/%D7%A6%D7%99%D7%9C%D7%95%D7%9E%D7%99-%D7%A0%D7%99%D7%95-%D7%91%D7%95%D7%A8%D7%9F-%D7%91%D7%A0%D7%99%D7%9D.jpg',
        }, {
            img: 'https://newbornstudio.co.il/wp-content/uploads/2022/01/hilaka0174fs.jpg',
        }, {
            img: 'https://veredhadadi.co.il/wp-content/uploads/bb-plugin/cache/12-panorama.jpg',
        }, {
            img: "https://newbornstudio.co.il/wp-content/uploads/2019/12/newborn-photos-newborn-picture-naama-kasri-00040.jpg",
        },
        {
            img: 'http://siman-tov-ilan.co.il/wp-content/uploads/2016/02/DSC_7171-Large.jpg',
        },
        {
            img: 'https://laviephoto.co.il/wp-content/uploads/2020/10/Newborn-Baby-Girl-01.jpg',
        },],
    },
    {
        id: "3",
        name: "Great Snapshots",
        description: "Pictures for your shop",
        price: 700,
        seviceMedia: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
        duration: 45,
        arrPictures: [

            {
                img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            },
            {
                img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            },
            {
                img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            },
            {
                img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            },
            {
                img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            },
            {
                img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            },
            {
                img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            },
            {
                img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            },
            {
                img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            },
            ]
    },
    {
        id: "4",
        name: "Food Pictures",
        description: "pictures for your amazing resturant",
        price: 600,
        seviceMedia: "https://mui.com/static/images/cards/paella.jpg",
        duration: 30,
        arrPictures: [{
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        },
        {
            img: "https://i.pinimg.com/236x/e0/56/17/e05617c2a9c0fd4f632d6472a8333c49.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/de/d6/83/ded683d991125c5f8cd49de3e66853d7.jpg",
        },
        {
            img: "https://i.pinimg.com/474x/6d/e7/fd/6de7fd9a46c74d190427d05f4e88b166.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/1b/94/7d/1b947d5fcb9c2baa3f663f322659d198.jpg",
        }],
    },
    {
        id: "5",
        name: "Car Pictures",
        description: "pictures of all kinds of cars",
        price: 200,
        seviceMedia: "https://www.budget.co.il/files/CarSale/articles-and-tips/22141-1-a-banner-1000x300-min.jpg",
        duration: 20,
        arrPictures: [{
            img: 'https://i.pinimg.com/236x/39/3e/e1/393ee1723ee299b22afa03fbc33d24be.jpg',
        },
        {
            img: 'https://i.pinimg.com/236x/66/d5/1d/66d51dd8c84f3581e5b71cd5eafcf7c7.jpg',
        },
        
        {
            img: "https://i.pinimg.com/236x/23/58/55/23585503082b83ce86cfd283cc72855b.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/b5/d0/98/b5d09895c9842c4a86ce49dbaa1d56f9.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/9e/7d/26/9e7d2635479025a93abc7cee069162c4.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/44/2f/6b/442f6b4f1c05c7851c7a2184de4534e0.jpg",
        }]
    },
    {
        id: "6",
        name: "Landscape Photography",
        description: "amazing Landscape photography",
        price: 200,
        seviceMedia: "https://d3m9l0v76dty0.cloudfront.net/system/photos/839675/show/a31e13db9e487fe48928a85dc7fa5fdc.jpg",
        duration: 20,
        arrPictures: [{
            img: 'https://i.pinimg.com/236x/01/75/0b/01750bb1ddeb31e56dbc0c27a6d3667b.jpg',
        },
        {
            img: 'https://i.pinimg.com/236x/8d/df/f6/8ddff6622e88434030e814635cffdaba.jpg',
        },
        {
            img: "https://i.pinimg.com/236x/c6/62/f5/c662f599a964d8bd9bcc23e58f3c4d37.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/e7/d9/45/e7d945456d785b8c4351f84d788ba4a9.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/77/fe/d1/77fed1f188e5da379a773b999bf5ee11.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/83/c6/ae/83c6aebd6285145a285aafa30cd6c870.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/3c/db/73/3cdb732786bcb58f5b121a5698bef21c.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/54/b8/0f/54b80f48f362072ceb982d4587ad752b.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/f7/03/5b/f7035bc8c9def2d9dbfd2897c1f8a9e5.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/a5/d1/f3/a5d1f3a39dafe1e8b6ce8f0b1b07af8d.jpg",
        }]

    },
    {
        id: "7",
        name: "Furniture Photos",
        description: "amazing furniture photos",
        price: 200,
        seviceMedia: "http://www.lublinerltd.co.il/design/images/slide1.jpg",
        duration: 20,
        arrPictures: [{
            img: 'https://i.pinimg.com/236x/cc/9b/9c/cc9b9c7adbf743a1e61f342eeeb34ecf.jpg',
        },
        {
            img: 'https://i.pinimg.com/236x/11/96/ef/1196ef6958be2f13609876c22fbdf85b.jpg',
        },
        {
            img: "https://i.pinimg.com/236x/71/9c/54/719c543d90e34c9a24273eed979611f4.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/52/be/08/52be08f96a01f0ad4b215cf155f429b4.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/e7/d1/dc/e7d1dc117076e5d51f63c229e4f20c65.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/15/0f/6f/150f6f5308465af33aac3f8d01d09aa5.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/a9/08/85/a9088511b30bc45b3d02ab60e1aef6b9.jpg",
        }]
    },
    {
        id: "8",
        name: "Clothes Photos",
        description: "amazing clothes photos",
        price: 200,
        seviceMedia: 'https://ecotoned.com/wp-content/uploads/2021/01/Flat-lay-demin-and-shirt-unsplash-1024x632.jpg',
        duration: 20,
        arrPictures: [{
            img: 'https://i.pinimg.com/236x/ea/ca/33/eaca33b307d97263f7c8a01680c9f0e9.jpg',
        },
        {
            img: 'https://i.pinimg.com/236x/7c/97/16/7c97160d1373e77d001fdc618a227822.jpg',
        },
        {
            img: "https://i.pinimg.com/236x/3f/f0/87/3ff0870a5d25d518ed58af28d0f165e4.jpgg",
        },
        {
            img: "https://i.pinimg.com/236x/10/3a/2b/103a2bb4aa98ed40a449071a0ec5c511.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/a0/28/09/a0280968abce0ddd95ef86ae78efdfe1.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/8e/fc/53/8efc53f43623b436823c1753702154f5.jpg",
        }]
    },
    {
        id: "9",
        name: "Galaxy Pictures",
        description: "amazing pictures of the galaxy",
        price: 200,
        seviceMedia: "https://storage.hidabroot.org/articles_new/203310_tumb_750Xauto.jpg",
        duration: 20,
        arrPictures: [{
            img: 'https://i.pinimg.com/236x/09/21/6b/09216bc0b2bd19fec0bed2d924175aef.jpg',
        },
        {
            img: 'https://i.pinimg.com/236x/77/1c/48/771c48a7c56e524c40b2e902bba06fb6.jpg',
        },
        {
            img: "https://i.pinimg.com/236x/de/8c/ae/de8cae66656032935006e77a37521da3.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/ba/6b/11/ba6b114f91ce04f160e99ced9deb6627.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/91/5d/a8/915da8bab4dd8a596a3b2c28a7ef504f.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/9e/a5/b8/9ea5b8634709462200d1364bdfb1dab7.jpg",
        },
        {
            img: "https://i.pinimg.com/236x/73/f3/83/73f383d05e70a7119df01ea85c844878.jpg",
        }]
    },
    ]

    services = [];

    constructor() {
        makeObservable(this, {
            services: observable,
            getServicesFromServer: action,
            addService: action,
            getServices: computed
        })
        this.services = this.getServices;
    }

    get getServices() {
        this.getServicesFromServer();
        return this.services;
    }

    getServicesFromServer() {
        axios.get("http://localhost:8787/services").then((res) => {
            runInAction(() => {
                this.services = res.data;
                if (this.services.length === 0)
                    for (let i = 0; i < this.tempServices.length; i++) {
                        this.addService(this.tempServices[i]);
                    }
            })
        })
    }

    addService(ser) {
        fetch("http://localhost:8787/service", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: ser.id,
                name: ser.name,
                description: ser.description,
                price: ser.price,
                duration: ser.duration,
                seviceMedia: ser.seviceMedia,
                arrPictures: ser.arrPictures
            })
        })
            .then(() => {
                runInAction(() => {
                    this.services = [...this.services, ser];
                });
            })
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default new Services();

