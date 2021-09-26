class GridView{
    
    
    /**
     *    properties
        @param [array] _tableClass - css классы оформления
        @param [array] data - входные данные
        @param [array] attribute - управляем как выводим данные data
        @param [array] _element - куда выводить таблицу
        @param [array] _header - заголовк таблицы
        @param [array] _headerClass - css классы оформления заголовка
     */

    constructor() {
        this._header = '';
        this._headerClass = [];
        this._tableClass = [];
        this._element = 'body';
        this.attribute = [];
    }

    /**
     * method header - for set the header text
     */

    set header(value){
        if(typeof value === 'string' && value.trim() != ''){
            this._header = value;
            return true;
        }
        return false
    }

     /**
     * method headerClass - for set the header css classes
     */

      set headerClass(value){
        if(typeof value === 'object'){
            this._headerClass = value;
            return true
        }
        return false
     }

    /**
     * method element - for set output element in DOM
     */

    set element(value){
        if(document.querySelector(value)){
            this._element = value;
            return true
        }
        return false
    }

    /**
     * method tableClass - for set the main css classes
     */

    set tableClass(value){
        if(typeof value === 'object'){
            this._tableClass = value;
            return true
        }
    }

    
    /**
     * method rendre - for creating table on the page
     */

     render(){

        /**
         * create header
         */ 

        if(this._header){
            const header = document.createElement('h1');
            header.textContent = this._header;
            this._headerClass.forEach(cssClass => header.classList.add(cssClass));
            document.querySelector(this._element).append(header);
        }

        /**
         * create table
         */

        let table = document.createElement('table');
        this._tableClass.forEach(cssClass => table.classList.add(cssClass));

        /**
         * create table header
         */

        let trHeader = document.createElement('tr');

        for(let key in this.attribute){
            let th = document.createElement('th');

            if(this.attribute[key].label){

                th.textContent = this.attribute[key].label;

            }else{
                th.textContent = key;
            }

            trHeader.append(th)
        }

        table.append(trHeader)

        /**
         * create table body
         */
    
        for(let i = 0; i < this.data.length; i++){
            let tr = document.createElement('tr');
            let dataArr = this.data[i];
            for(let key in this.attribute){
                let value = dataArr[key];
                let td = document.createElement('td');

                if(this.attribute[key].check){
                    value = this.attribute[key].check(dataArr);
                    td.textContent = value;

                }

                if(this.attribute[key].src){
                    td.innerHTML = dataArr[key]
                }else{
                    td.textContent = value;
                }

                tr.append(td);
            }

            table.append(tr);

        }

        document.querySelector(this._element).append(table)

    }

}