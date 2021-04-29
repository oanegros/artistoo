

class nDNA extends DNA {

	/* eslint-disable */ 
	constructor (conf, mt ,parent) {
        super(conf,mt, parent)
        if (parent instanceof DNA){
            this.quality = [...parent.quality]
            if (this.mt.random() < conf["NDNA_MUT_RATE"] ){
                this.mutate()
            }
        } else {
            this.quality = new Array(this.conf["N_OXPHOS"]+this.conf["N_TRANSLATE"]+this.conf["N_REPLICATE"]).fill(1)
            for (let i = 0 ; i < this.quality.length; i++){
                if (i < this.conf["N_OXPHOS"]  + this.conf["N_TRANSLATE"])
                    this.quality[i] = 0
            }
        }
    }

    mutate(){ 
        let ix = Math.floor(this.mt.random() * this.quality.length)
        this.quality[ix] = !this.quality[ix]
    }


}

export default nDNA