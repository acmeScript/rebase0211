class RaceConditionGuard<PromiseResolveType = any> {
    private lastPromise?: Promise<PromiseResolveType>;
    getGuardedPromise(promise: Promise<PromiseResolveType>) {
      this.lastPromise = promise;
      return this.lastPromise.then(this.preventRaceCondition());
    }
    private preventRaceCondition() {
      const currentPromise = this.lastPromise;
      return (response: PromiseResolveType) => {
        if (this.lastPromise !== currentPromise) {
          console.log('promise cancelled');
          return new Promise(() => null) as Promise<PromiseResolveType>;
        }
        return response;
      };
    }
  }

export default RaceConditionGuard;