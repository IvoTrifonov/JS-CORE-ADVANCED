function workerProcces(worker) {
    if (worker.dizziness) {
        worker.dizziness = false;
        worker.levelOfHydrated += worker.weight * 0.1 * worker.experience;
    }

    return worker;
}

console.log(workerProcces(workerProcces({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true 
})));