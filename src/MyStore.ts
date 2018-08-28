import { observable, runInAction } from "mobx"
import axios from "axios" // 3.4.1

class Store {
    repos = observable.map(new Map(), {deep: false})
    contributors = observable.map(new Map(), {deep: false})
    selectedRepo = observable.box(null)

    searchRepo(language, query = null) {
        let url = `https://api.github.com/search/repositories?q=stars%3A%3E1+language:${language}&sort=stars&order=desc`
        if (query) {
            url = `https://api.github.com/search/repositories?q=${query}+language:${language}&sort=stars&order=desc`
        }

        axios
            .get(url)
            .then(response => {
                console.log('resp', response.data)

                // handle success
                runInAction(() => {
                    this.contributors.clear()
                    this.repos.clear()
                    this.selectedRepo.set(null)

                    for (let x of response.data.items) {
                        this.repos.set(x.id, x)
                    }
                })
            })
            .catch(function(error) {
                // handle error
                console.log(error)
            })
            .then(function() {
                // always executed
            })
    }

}

const store = new Store()
export default store