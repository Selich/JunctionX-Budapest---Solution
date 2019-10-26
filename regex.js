function usedByOrBestBefore(str){
    let useBy = []
    useBy.push(/salad(s)?/i)
    useBy.push(/eggs(s)?/i)
    useBy.push(/meat(s)?/i)
    useBy.push(/steak(s)?/i)
    useBy.push(/pork(s)?/i) 
    useBy.push(/poultry(s)?/i) 
    useBy.push(/milk(s)?/i) 
    useBy.push(/fruit(s)?/i)
    useBy.push(/beef(s)?/i)
    useBy.push(/lamb(s)?/i)
    useBy.push(/salami(s)?/i)
    useBy.push(/ham(s)?/i)
    useBy.push(/fish(s)?/i)
    useBy.push(/salmon(s)?/i)
    useBy.push(/chicken(s)?/i)
    useBy.push(/duck(s)?/i)
    useBy.push(/turkey(s)?/i)
    useBy.push(/goose(s)?/i)
    useBy.push(/tofu(s)?/i)
    useBy.push(/cream(s)?/i)
    useBy.push(/yoghurt(s)?/i)
    useBy.push(/rice(s)?/i)
    useBy.push(/avocados(s)?/i)
    useBy.push(/banana(s)?/i)
    useBy.push(/grapes(s)?/i)
    useBy.push(/kiwi(s)?/i)
    useBy.push(/melon(s)?/i)
    useBy.push(/peaches(s)?/i)
    useBy.push(/pinaple(s)?/i)
    useBy.push(/watermelon(s)?/i)
    useBy.push(/beans(s)?/i)
    useBy.push(/strawberrie(s)?/i)
    useBy.push(/broccoli(s)?/i)
    useBy.push(/corn(s)?/i)
    useBy.push(/lettuce(s)?/i)
    useBy.push(/peas(s)?/i)
    useBy.push(/tomatoes/i)
    useBy.push(/tomato/i)

    let BestBefore = []
    BestBefore.push(/cheese(s)?/i)
    BestBefore.push(/biscuit(s)?/i)
    BestBefore.push(/pastry(s)?/i)
    BestBefore.push(/cottage(s)?/i)
    BestBefore.push(/margarine(s)?/i)
    BestBefore.push(/peanut_butter(s)?/i)
    BestBefore.push(/mayonnaise(s)?/i)
    BestBefore.push(/citrus(s)?/i)
    BestBefore.push(/pasta(s)?/i)
    BestBefore.push(/brown rice(s)?/i)
    BestBefore.push(/bread(s)?/i)
    BestBefore.push(/sugar(s)?/i)
    BestBefore.push(/jam(s)?/i)
    BestBefore.push(/honey(s)?/i)
    BestBefore.push(/canned(s)?/i)
    BestBefore.push(/tinned(s)?/i)
    BestBefore.push(/pickle(s)?/i)
    BestBefore.push(/picked/i)
    BestBefore.push(/chocolate(s)?/i)
    BestBefore.push(/vinegar(s)?/i)


    for(i=0;i<useBy.length;i++){
        if(useBy[i].test(str)){
            return "Use By";
            break;
        }
        if(BestBefore[i].test(str)){
            return "Best Before";
            break;
        }
    }
    return "Label" 
}