import React from 'react';
import '../styles/styles.css'; 

const Calendar: React.FC = () => {
  return (
    <div className="calendar">
      <h3>July 2024</h3>
      <div className="calendar-grid">
        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
        {/* Dates here */}
        <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span>
        <span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span>
        <span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span>
        <span>22</span><span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span>
        <span>29</span><span>30</span><span>31</span>
        {/* Add other days */}
      </div>
    </div>
  );
};

export default Calendar;
