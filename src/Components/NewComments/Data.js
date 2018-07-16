import {List, Map} from "immutable";

const Data = Map({
        value: "",
        Adding:true,
        comments: List([
            Map({ id: 1, value: "", Adding:false, comment:"Comment1", comments: List([
                    Map({id: 9, value: "", Adding:false, comment:"Comment1-1"}),
                    Map({id: 10, value: "", Adding:false, comment:"Comment1-2"}),
                    Map({id: 11, value: "", Adding:true, comment:"Comment1-3"})
                ])}),
            Map({id: 2, value: "", Adding:false, comment:"Comment2"}),
            Map({id: 3, value: "", Adding:true, comment:"Comment3"}),
            Map({id: 4, value: "", Adding:false, comment:"Comment4", comments: List([
                    Map({id: 6, value: "", Adding:false, comment:"Comment4-1"}),
                    Map({id: 7, value: "", Adding:false, comment:"Comment4-2"}),
                    Map({id: 8, value: "", Adding:false, comment:"Comment4-3", comments: List([
                            Map({id: 11, value: "", Adding:false, comment:"Comment4-3-1"}),
                            Map({id: 12, value: "", Adding:false, comment:"Comment4-3-2", comments:List([
                                    Map({id: 13, value: "", Adding:true, comment:"Comment4-3-2-1"})
                                ])})

                        ])})
                ])}),
            Map({id: 5, value: "", Adding: false, comment:"Comment5"}),
        ])
    });

export default Data;