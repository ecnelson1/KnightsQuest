export function wealth(gold) {
    if (gold <= 0) {
        return 'poor';   
    }
    else if (gold > 0 < 50 ) {
        return 'modest';   
    }
    return 'rich';
}

export function health(hp) {
    if (hp <= 0) {
        return 'dead';
    }
    if (hp < 35) {
        return 'disabled';
    }
    return 'healthy';
}
