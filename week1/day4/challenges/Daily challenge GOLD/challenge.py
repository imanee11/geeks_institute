# DNA
import random

#gene → one number: 0 or 1
#chromosome → a list of 10 genes
#DNA → a list of 10 chromosomes
#organism → has DNA and mutates

class Gene:
    def __init__(self):
        self.value = random.choice([0, 1])

    def mutate(self):
        #flip 0 to 1 or 1 to 0
        if self.value == 0:
            self.value = 1
        else:
            self.value = 0
    
# g = Gene()
# print(g)        
# g.mutate()
# print(g)         

class Chromosome:
    def __init__(self):
        self.genes = []
        for i in range(10): 
            gene = Gene()
            self.genes.append(gene)
    
    def mutate(self):
        for i in self.genes:
            if random.random() < 0.5:  #50% chance to mutate
                i.mutate()

    def is_all_ones(self):
        #check if all genes are 1
        for i in self.genes:
            if i.value != 1:
                return False
        return True
    
# c = Chromosome()
# print(c)
# c.mutate()
# print(c)
# print(c.is_all_ones())

class DNA:
    def __init__(self):
        self.chromosomes = []
        for i in range(10):
            chromosome = Chromosome()
            self.chromosomes.append(chromosome)

    def mutate(self):
        for chromosome in self.chromosomes:
            if random.random() < 0.5:
                chromosome.mutate()

    def is_all_ones(self):
        for chromosome in self.chromosomes:
            if not chromosome.is_all_ones():
                return False
        return True

# d = DNA()
# print(d)
# d.mutate()
# print("After mutation:")
# print(d)

class Organism:
    def __init__(self, environment):
        self.dna = DNA()
        self.environment = environment

    def mutate(self):
        if random.random() < self.environment:
            self.dna.mutate()

# o = Organism(environment=0.9)
# o.mutate()
# print(o.dna)

def simulate():
    organism = Organism(environment=0.9)
    generations = 0

    while not organism.dna.is_all_ones():
        organism.mutate()
        generations += 1

    print("all genes are 1!")
    print(f"It took {generations} generations.")
    print(organism.dna)

simulate()
