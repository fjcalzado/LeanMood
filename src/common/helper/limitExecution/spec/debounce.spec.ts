import { debounce } from '../debounce';

describe('debounce', () => {
  it('should return a function', () => {
    // Arrange
    const f = () => 0;

    // Act
    const df = debounce(f, 0);

    // Assert
    expect(df).to.be.a('function');
  });

  it('should prevent function calls within the threshold', () => {
    // Arrange
    let result = 0;
    const f = (x) => result = 2 * x;

    // Act
    const df = debounce(f, 10);
    df(1);
    df(2);
    df(3);

    // Assert
    expect(result).to.be.equals(0);
  });

  it('should trigger the last received function call once the threshold is over', function() {
    // Arrange
    let result = 0;
    const f = (x) => result = 2 * x;
    const delay = (ms) => (new Promise((resolve) => setTimeout(resolve, ms)));

    // Act
    const df = debounce(f, 10);
    df(1);
    df(2);
    df(3);

    // Assert
    expect(result).to.be.equals(0);
    return delay(11).then(() => {
      expect(result).to.be.equals(6);
    });
  });
});