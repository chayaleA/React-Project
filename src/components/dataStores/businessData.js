import axios from 'axios';
import { observable, action, makeObservable, computed, runInAction } from 'mobx';

class BusinessData {
    tempData = {
        name: "DD-Pictures",
        address: "Bar Ilan 18",
        phone: "0556771946",
        owner: "Dvorale Avramovitz",
        logo: "https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/Chequered-Flag-logo.jpg",
        description: "The best pictures in the world",
    }

    data = {};

    constructor() {
        makeObservable(this, {
            data: observable,
            createOrUpdateBusinessdata: action,
            getBusinessDataFromServer: action,
            getData: computed
        })
        this.data = this.getData;
        // this.getBusinessDataFromServer();
    }

    get getData() {
        this.getBusinessDataFromServer();
        return this.data;
    }

    getBusinessDataFromServer() {
        axios.get("http://localhost:8787/businessData").then((res) => {
            runInAction(() => {
                this.data = res.data;
                if (res.data.name === undefined)
                    this.createOrUpdateBusinessdata(this.tempData);       
                   
            })
        })
    }

    createOrUpdateBusinessdata(data) {
        fetch("http://localhost:8787/businessData", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.name,
                address: data.address,
                phone: data.phone,
                owner: data.owner,
                logo: data.logo,
                description: data.description,
            })
        }).then(() => {
            this.data = data;
        })
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default new BusinessData();